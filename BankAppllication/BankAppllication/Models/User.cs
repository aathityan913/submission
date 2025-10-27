using System;
using System.Collections.Generic;

namespace BankingAPI.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public DateTime DateOfBirth { get; set; }
        public string UserType { get; set; } = "NormalUser";
        public int? POAUserId { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public bool IsActive { get; set; } = true;

        // Navigation
        public ICollection<Account>? Accounts { get; set; }
        public ICollection<UserRole>? UserRoles { get; set; }
    }
}
