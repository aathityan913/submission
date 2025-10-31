using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BankCustomerApi.Models;

namespace BankCustomerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BranchController : ControllerBase
    {
        private readonly TrainingContext _context;

        public BranchController(TrainingContext context)
        {
            _context = context;
        }

        
        [HttpGet]
        [Authorize(Roles = "Admin,Employee,Customer")]
        public async Task<ActionResult<IEnumerable<Branch>>> GetBranches()
        {
            var branches = await _context.Branches
                .Include(b => b.Bank)
                .Include(b => b.Accounts)
                .ToListAsync();

            return Ok(branches);
        }

      
        [HttpGet("{id}")]
        [Authorize(Roles = "Admin,Employee,Customer")]
        public async Task<ActionResult<Branch>> GetBranch(int id)
        {
            var branch = await _context.Branches
                .Include(b => b.Bank)
                .Include(b => b.Accounts)
                .FirstOrDefaultAsync(b => b.BranchID == id);

            if (branch == null)
            {
                return NotFound(new { message = $"Branch with ID {id} not found." });
            }

            return Ok(branch);
        }

        
        [HttpPost]
        [Authorize(Roles = "Admin,Employee")]
        public async Task<ActionResult<Branch>> PostBranch(Branch branch)
        {
            var bankExists = await _context.Banks.AnyAsync(b => b.BankID == branch.BankID);
            if (!bankExists)
                return BadRequest(new { message = $"Bank with ID {branch.BankID} does not exist." });

            _context.Branches.Add(branch);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetBranch), new { id = branch.BranchID }, branch);
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Admin,Employee")]
        public async Task<IActionResult> PutBranch(int id, Branch branch)
        {
            if (id != branch.BranchID)
                return BadRequest(new { message = "Branch ID mismatch." });

            _context.Entry(branch).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BranchExists(id))
                    return NotFound(new { message = $"Branch with ID {id} not found." });
                else
                    throw;
            }

            return Ok(new { message = $"Branch {id} updated successfully." });
        }

        
        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]  
        public async Task<IActionResult> DeleteBranch(int id)
        {
            var branch = await _context.Branches.FindAsync(id);
            if (branch == null)
            {
                return NotFound(new { message = $"Branch with ID {id} not found." });
            }

            _context.Branches.Remove(branch);
            await _context.SaveChangesAsync();

            return Ok(new { message = $"Branch {id} deleted successfully." });
        }

        private bool BranchExists(int id)
        {
            return _context.Branches.Any(e => e.BranchID == id);
        }
    }
}
