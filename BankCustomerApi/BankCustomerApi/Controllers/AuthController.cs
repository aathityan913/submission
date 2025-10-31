using Microsoft.AspNetCore.Mvc;
using BankCustomerApi.Models;
using BankCustomerApi.Services;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace BankCustomerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly TrainingContext _context;
        private readonly JwtService _jwtService;

        public AuthController(TrainingContext context, JwtService jwtService)
        {
            _context = context;
            _jwtService = jwtService;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest login)
        {
            if (login == null || string.IsNullOrWhiteSpace(login.Email) || string.IsNullOrWhiteSpace(login.Password))
                return BadRequest(new { Message = "Email and Password are required." });

            // ✅ Fetch user with roles
            var user = _context.Users
    .Include(u => u.UserRoles)
        .ThenInclude(ur => ur.Role)
    .FirstOrDefault(u => u.Email == login.Email && u.Status == "Active");


            if (user == null)
                return Unauthorized(new { Message = "User not found or inactive." });

            // ✅ Password check (plain for now)
            if (user.PasswordHash != login.Password)
                return Unauthorized(new { Message = "Invalid password." });

            // ✅ Extract roles list
            var roles = user.UserRoles.Select(ur => ur.Role.RoleName).ToList();

            // ✅ Convert multiple roles to comma string
            var roleString = string.Join(",", roles);

            // ✅ Generate token (pass comma-separated roles string)
            var token = _jwtService.GenerateToken(user, roles);

            return Ok(new
            {
                Message = "Login successful ✅",
                Token = token,
                User = new
                {
                    user.UserID,
                    user.Name,
                    user.Email,
                    Roles = roles
                }
            });
        }
    }

    public class LoginRequest
    {
        public string? Email { get; set; }
        public string? Password { get; set; }
    }
}
