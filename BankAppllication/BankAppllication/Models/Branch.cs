using System.Collections.Generic;

namespace BankingAPI.Models
{
    public class Branch
    {
        public int Id { get; set; }
        public string Location { get; set; } = string.Empty;
        public int BankId { get; set; }
        public int? ManagerUserId { get; set; }

        // Navigation
        public Bank? Bank { get; set; }
        public ICollection<Account>? Accounts { get; set; }
    }
}
