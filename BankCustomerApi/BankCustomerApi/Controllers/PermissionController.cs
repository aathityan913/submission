using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BankCustomerApi.Models;

namespace BankCustomerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PermissionController : ControllerBase
    {
        private readonly TrainingContext _context;

        public PermissionController(TrainingContext context)
        {
            _context = context;
        }

       
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Permission>>> GetPermissions()
        {
            return await _context.Permissions.ToListAsync();
        }

       
        [HttpGet("{id}")]
        public async Task<ActionResult<Permission>> GetPermission(int id)
        {
            var permission = await _context.Permissions.FindAsync(id);

            if (permission == null)
                return NotFound();

            return permission;
        }
    }
}
        
