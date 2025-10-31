using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BankCustomerApi.Models;
using BankCustomerApi.DTOs;

namespace BankCustomerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly TrainingContext _context;

        public UsersController(TrainingContext context)
        {
            _context = context;
        }

        // ✅ Only Admin can onboard new users
        [HttpPost("create")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> CreateUser([FromBody] UserCreateDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            // ✅ Check if email already exists
            if (await _context.Users.AnyAsync(u => u.Email == dto.Email))
                return BadRequest("A user with this email already exists.");

            // ✅ Find role (default "Customer")
            var role = await _context.Roles.FirstOrDefaultAsync(r => r.RoleName == dto.RoleName);
            if (role == null)
                return BadRequest($"Role '{dto.RoleName}' not found.");

            // ✅ Create new user (match your entity exactly)
            var newUser = new User
            {
                Name = dto.Name,
                Contact = dto.Contact,          // ✅ Added to satisfy required member
                Email = dto.Email,
                PasswordHash = dto.Password,    // ✅ Matches your entity property
                RoleID = role.RoleID,
                Status = "Active",
                CreatedDate = DateTime.Now,
                CreatedBy = "Admin",            // optional field
                Role = role                     // ✅ Required navigation property
            };

            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();

            // ✅ Return safe JSON (no password exposure)
            return Ok(new
            {
                message = "User created successfully ✅",
                user = new
                {
                    newUser.UserID,
                    newUser.Name,
                    newUser.Email,
                    newUser.Contact,
                    Role = role.RoleName,
                    newUser.Status,
                    newUser.CreatedDate
                }
            });
        }
    }
}
