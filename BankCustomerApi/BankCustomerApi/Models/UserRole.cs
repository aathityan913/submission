using System.ComponentModel.DataAnnotations.Schema;

namespace BankCustomerApi.Models
{
    [Table("UserRole", Schema = "training")]
    public class UserRole
    {
        public int UserID { get; set; }
        public int RoleID { get; set; }

        public User User { get; set; } = null!;
        public Role Role { get; set; } = null!;
    }
}
