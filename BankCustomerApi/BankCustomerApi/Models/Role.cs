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

        public virtual ICollection<User> Users { get; set; }
    }
}
