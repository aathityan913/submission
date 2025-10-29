using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BankCustomerApi.Models;

namespace BankCustomerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly TrainingContext _context;

        public AccountController(TrainingContext context)
        {
            _context = context;
        }

        // ✅ GET: api/Account
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Account>>> GetAccounts()
        {
            var accounts = await _context.Accounts
                .Include(a => a.User)
                .Include(a => a.Bank)
                .Include(a => a.Branch)
                .Include(a => a.Permissions)
                .ToListAsync();

            return Ok(accounts);
        }

        // ✅ GET: api/Account/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Account>> GetAccount(int id)
        {
            var account = await _context.Accounts
                .Include(a => a.User)
                .Include(a => a.Bank)
                .Include(a => a.Branch)
                .Include(a => a.Permissions)
                .FirstOrDefaultAsync(a => a.AccountNo == id);

            if (account == null)
            {
                return NotFound($"Account with ID {id} not found.");
            }

            return Ok(account);
        }

        // ✅ POST: api/Account
        [HttpPost]
        public async Task<ActionResult<Account>> PostAccount(Account account)
        {
            // Validation: check if related entities exist
            if (!_context.Users.Any(u => u.UserID == account.UserID))
                return BadRequest($"User with ID {account.UserID} not found.");

            if (!_context.Banks.Any(b => b.BankID == account.BankID))
                return BadRequest($"Bank with ID {account.BankID} not found.");

            if (!_context.Branches.Any(br => br.BranchID == account.BranchID))
                return BadRequest($"Branch with ID {account.BranchID} not found.");

            _context.Accounts.Add(account);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAccount), new { id = account.AccountNo }, account);
        }

        // ✅ PUT: api/Account/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAccount(int id, Account account)
        {
            if (id != account.AccountNo)
            {
                return BadRequest("Account number mismatch.");
            }

            _context.Entry(account).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccountExists(id))
                {
                    return NotFound($"Account with ID {id} not found.");
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // ✅ DELETE: api/Account/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAccount(int id)
        {
            var account = await _context.Accounts.FindAsync(id);
            if (account == null)
            {
                return NotFound($"Account with ID {id} not found.");
            }

            _context.Accounts.Remove(account);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AccountExists(int id)
        {
            return _context.Accounts.Any(e => e.AccountNo == id);
        }
    }
}
