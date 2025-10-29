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

        // =============================================================
        // GET: api/Permission
        // =============================================================
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Permission>>> GetPermissions()
        {
            return await _context.Permissions.ToListAsync();
        }

        // =============================================================
        // GET: api/Permission/5
        // =============================================================
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
        // =============================================================
        // POST: api/Permission
        // ==============
