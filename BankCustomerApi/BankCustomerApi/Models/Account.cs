using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BankCustomerApi.Models
{
    [Table("Account", Schema = "training")]
    public class Account : AuditableEntity
    {
        [Key]
        public int AccountNo { get; set; }

        [ForeignKey("User")]
        public int UserID { get; set; }

        [ForeignKey("Bank")]
        public int BankID { get; set; }

        [ForeignKey("Branch")]
        public int BranchID { get; set; }

        [Required, StringLength(50)]
        public required string AccountType { get; set; }

        [Required, StringLength(10)]
        public required string Currency { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal Balance { get; set; }

        [StringLength(20)]
        public required string Status { get; set; }

        public required virtual User User { get; set; }
        public required virtual Bank Bank { get; set; }
        public required virtual Branch Branch { get; set; }

        // 👇 FIXED: singular name (Permission)
        public virtual ICollection<Permission> Permissions { get; set; } = new List<Permission>();
    }
}
