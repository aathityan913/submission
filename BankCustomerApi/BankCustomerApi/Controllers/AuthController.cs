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

        // ✅ POST: api/Auth/login
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest login)
        {
            if (login == null || string.IsNullOrWhiteSpace(login.Email) || string.IsNullOrWhiteSpace(login.Password))
                return BadRequest(new { Message = "Email and Password are required." });

            // ✅ Find the user and include role info
            var user = _context.Users
                .Include(u => u.Role)
                .FirstOrDefault(u => u.Email == login.Email && u.Status == "Active");

            if (user == null)
                return Unauthorized(new { Message = "User not found or inactive." });

            // ✅ Simple password check (for demo/testing)
            // In real systems, store hashed passwords
            if (user.PasswordHash != login.Password)
                return Unauthorized(new { Message = "Invalid password." });

            // ✅ Generate JWT token with Name + Role
            var token = _jwtService.GenerateToken(user.Name ?? "Unknown", user.Role.RoleName);

            // ✅ Return clean response
            return Ok(new
            {
                Message = "Login successful",
                Token = token,
                User = new
                {
                    user.UserID,
                    user.Name,
                    user.Email,
                    user.Role.RoleName
                }
            });
        }
    }

    // ✅ Login request model
    public class LoginRequest
    {
        public string? Email { get; set; }
        public string? Password { get; set; }
    }
}
