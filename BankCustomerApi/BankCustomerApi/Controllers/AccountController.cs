using BankCustomerApi.DTOs;
using BankCustomerApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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

      
        [HttpPost]
        public async Task<ActionResult<Account>> PostAccount(Account account)
        {
            
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

        [HttpGet("user/{userId}")]
        public async Task<ActionResult<IEnumerable<AccountDto>>> GetAccountsByUser(int userId)
        {
            var accounts = await _context.Accounts
                .Where(a => a.UserID == userId)
                .Include(a => a.Bank)
                .Include(a => a.Branch)
                .Select(a => new AccountDto
                {
                    AccountNo = a.AccountNo,
                    AccountType = a.AccountType,
                    Currency = a.Currency,
                    Balance = a.Balance,
                    Status = a.Status,
                    BankID = a.BankID,
                    BankName = a.Bank.BankName,
                    BranchID = a.BranchID,
                    BranchName = a.Branch.BranchName
                })
                .ToListAsync();

            if (!accounts.Any())
            {
                return NotFound($"No accounts found for user {userId}");
            }

            return Ok(accounts);
        }
    }
}
