using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BankingAPI.Models
{
    public class Transaction
    {
        public int Id { get; set; }

        // Foreign key to Account
        public int AccountId { get; set; }

        public string Type { get; set; } = string.Empty;

        [Column(TypeName = "decimal(18,2)")] // ✅ Prevent decimal truncation warning
        public decimal Amount { get; set; }

        public DateTime Timestamp { get; set; } = DateTime.Now;

        // Foreign key to User (who performed the transaction)
        public int PerformedByUserId { get; set; }

        // ✅ Navigation properties
        public Account? Account { get; set; }
        public User? PerformedByUser { get; set; }
    }
}
