using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BankCustomerApi.Models
{
    [Table("Permission", Schema = "training")]
    public class Permission : AuditableEntity
    {
        [Key]
        public int PermissionID { get; set; }

        [Required]
        [StringLength(100)]
        public string PermissionName { get; set; } = string.Empty;

        [StringLength(150)]
        public string? Description { get; set; }
    }
}
