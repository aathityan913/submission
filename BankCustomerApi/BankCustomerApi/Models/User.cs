using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BankCustomerApi.Models
{
    [Table("User", Schema = "training")]
    public class User : AuditableEntity
    {
        [Key]
        public int UserID { get; set; }

        [Required, StringLength(100)]
        public string Name { get; set; } = string.Empty;

        [StringLength(15)]
        public string Contact { get; set; } = string.Empty;

        [Required, StringLength(100)]
        public string Email { get; set; } = string.Empty;

        [Required, StringLength(255)]
        public string PasswordHash { get; set; } = string.Empty;

        [StringLength(20)]
        public string Status { get; set; } = "Active";

        public virtual ICollection<UserRole> UserRoles { get; set; } = new List<UserRole>();
    }
}
