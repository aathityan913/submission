using Microsoft.AspNetCore.Mvc;
using BankCustomerApi.Models;
using BankCustomerApi.Services;
using Microsoft.EntityFrameworkCore;

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

            // ✅ Fetch user + role
            var user = _context.Users
                .Include(u => u.Role)
                .FirstOrDefault(u => u.Email == login.Email && u.Status == "Active");

            if (user == null)
                return Unauthorized(new { Message = "User not found or inactive." });

            // ✅ Verify password (plain text for now)
            if (user.PasswordHash != login.Password)
                return Unauthorized(new { Message = "Invalid password." });

            // ✅ Generate JWT token
            var token = _jwtService.GenerateToken(user.Name ?? "Unknown", user.Role.RoleName);

            return Ok(new
            {
                Message = "Login successful ✅",
                Token = token,
                User = new
                {
                    user.UserID,
                    user.Name,
                    user.Email,
                    Role = user.Role.RoleName
                }
            });
        }
    }

    // DTO for login request
    public class LoginRequest
    {
        public string? Email { get; set; }
        public string? Password { get; set; }
    }
}
