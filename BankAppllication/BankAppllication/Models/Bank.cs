using System;
using System.Collections.Generic;

namespace BankingAPI.Models
{
    public class Bank
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public DateTime? EstablishedDate { get; set; }
        public bool IsActive { get; set; } = true;

        // Navigation
        public ICollection<Branch>? Branches { get; set; }
    }
}
