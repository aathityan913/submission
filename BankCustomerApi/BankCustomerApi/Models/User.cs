using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using BankCustomerApi.Models;

namespace BankCustomerApi.Models
{
    [Table("User", Schema = "training")]
    public class User : AuditableEntity
    {
        [Key]
        public int UserID { get; set; }



        [Required, StringLength(100)]
        public string? Name { get; set; }

        [StringLength(15)]
        public required string Contact { get; set; }

        [Required, StringLength(100)]
        public required string Email { get; set; }



        [Required, StringLength(255)]
        public required string PasswordHash { get; set; }

        [ForeignKey("Role")]
        public int RoleID { get; set; }

        [StringLength(20)]
        public required string Status { get; set; }

        public required virtual Role Role { get; set; }
        public virtual ICollection<Account>? Accounts { get; set; }

        public virtual ICollection<UserRole>? UserRoles { get; set; }
    }
}
