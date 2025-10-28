using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BankCustomerApi.Models
{
    [Table("Transaction", Schema = "training")]
    public class Transaction : AuditableEntity
    {
        [Key]
        public int TransactionID { get; set; }

        [Required]
        [ForeignKey("Account")]
        public int AccountID { get; set; }

        [Required]
        [StringLength(20)]
        public required string TransactionType { get; set; }  // Deposit, Withdraw, Transfer

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal Amount { get; set; }

        [StringLength(255)]
        public required string Description { get; set; }

        [Required]
        public DateTime TransactionDate { get; set; } = DateTime.Now;

        [ForeignKey("User")]
        public int? PerformedBy { get; set; } // who performed the transaction (optional)

        // Navigation properties
        public required virtual Account Account { get; set; }
        public virtual User User { get; set; }
    }
}
