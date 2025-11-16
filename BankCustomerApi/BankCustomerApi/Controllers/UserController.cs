using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BankCustomerApi.Models;
using BankCustomerApi.DTOs;
using BankCustomerApi.Services;
using System.Security.Cryptography;
using System.Text;

namespace BankCustomerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly TrainingContext _context;
        private readonly JwtService _jwt;

        public UsersController(TrainingContext context, JwtService jwt)
        {
            _context = context;
            _jwt = jwt;
        }

        private string HashPassword(string password)
        {
            using var sha = SHA256.Create();
            var bytes = Encoding.UTF8.GetBytes(password);
            return Convert.ToBase64String(sha.ComputeHash(bytes));
        }

       [Authorize(Roles = "Admin")]
[HttpPost("create")]
public async Task<IActionResult> CreateUser([FromBody] UserCreateDto request)
{
    if (!ModelState.IsValid)
        return BadRequest(ModelState);

    var user = new User
    {
        Name = request.Name,
        Email = request.Email,
        PasswordHash =  HashPassword(request.Password),// ✅ You will hash later
        Status = "Active"
    };

    _context.Users.Add(user);
    await _context.SaveChangesAsync();

    // ✅ Assign multiple roles
    if (request.RoleIds != null && request.RoleIds.Count > 0)
    {
        foreach (var roleId in request.RoleIds)
        {
            var userRole = new UserRole
            {
                UserID = user.UserID,
                RoleID = roleId
            };
            _context.UserRoles.Add(userRole);
        }
        await _context.SaveChangesAsync();
    }

    return Ok(new
    {
        Message = "User created successfully ✅",
        User = new
        {
            user.UserID,
            user.Name,
            user.Email,
            Roles = request.RoleIds
        }
    });
}

        [Authorize(Roles = "Admin")]
        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<UserListDto>>> GetAllUsers()
        {
            var users = await _context.Users
                .Include(u => u.UserRoles)
                    .ThenInclude(ur => ur.Role)
                .Select(u => new UserListDto
                {
                    UserID = u.UserID,
                    Name = u.Name,
                    Contact = u.Contact,
                    Email = u.Email,
                    Status = u.Status,
                    Roles = u.UserRoles.Select(r => r.Role.RoleName).ToList()
                })
                .ToListAsync();

            return Ok(users);
        }


    }
}
