using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BankCustomerApi.Models;

namespace BankCustomerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BankController : ControllerBase
    {
        private readonly TrainingContext _context;

        public BankController(TrainingContext context)
        {
            _context = context;
        }

        // ✅ GET: api/Bank
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bank>>> GetBanks()
        {
            var banks = await _context.Banks
                .Include(b => b.Branches)
                .Include(b => b.Accounts)
                .ToListAsync();

            return Ok(banks);
        }

        // ✅ GET: api/Bank/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Bank>> GetBank(int id)
        {
            var bank = await _context.Banks
                .Include(b => b.Branches)
                .Include(b => b.Accounts)
                .FirstOrDefaultAsync(b => b.BankID == id);

            if (bank == null)
            {
                return NotFound($"Bank with ID {id} not found.");
            }

            return Ok(bank);
        }

        // ✅ POST: api/Bank
        [HttpPost]
        public async Task<ActionResult<Bank>> PostBank(Bank bank)
        {
            _context.Banks.Add(bank);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetBank), new { id = bank.BankID }, bank);
        }

        // ✅ PUT: api/Bank/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBank(int id, Bank bank)
        {
            if (id != bank.BankID)
            {
                return BadRequest("Bank ID mismatch.");
            }

            _context.Entry(bank).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BankExists(id))
                {
                    return NotFound($"Bank with ID {id} not found.");
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // ✅ DELETE: api/Bank/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBank(int id)
        {
            var bank = await _context.Banks.FindAsync(id);
            if (bank == null)
            {
                return NotFound($"Bank with ID {id} not found.");
            }

            _context.Banks.Remove(bank);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BankExists(int id)
        {
            return _context.Banks.Any(e => e.BankID == id);
        }
    }
}
