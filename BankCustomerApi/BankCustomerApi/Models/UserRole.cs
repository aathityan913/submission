using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BankCustomerApi.Models
{
    [Table("UserRole", Schema = "training")]
    public class UserRole : AuditableEntity
    {
        [Key]
        public int UserRoleID { get; set; }

        [ForeignKey("User")]
        public int UserID { get; set; }

        [ForeignKey("Role")]
        public int RoleID { get; set; }

        // ✅ New Columns
        [Required, StringLength(100)]
        public string UserName { get; set; } = string.Empty;

        [Required, StringLength(50)]
        public string RoleName { get; set; } = string.Empty;

        // 🔗 Navigation properties
        public virtual User User { get; set; } = null!;
        public virtual Role Role { get; set; } = null!;
    }
}
