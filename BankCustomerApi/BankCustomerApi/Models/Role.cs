using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BankCustomerApi.Models
{
    [Table("Role", Schema = "training")]
    public class Role : AuditableEntity
    {
        [Key]
        public int RoleID { get; set; }

        [Required, StringLength(50)]
        public required string RoleName { get; set; }

        [StringLength(255)]
        public required string Description { get; set; }

        // 👇 Many-to-many link via UserRole
        public virtual ICollection<UserRole> UserRoles { get; set; } = new List<UserRole>();
    }
}
