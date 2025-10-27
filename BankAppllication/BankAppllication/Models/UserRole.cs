﻿namespace BankingAPI.Models
{
    public class UserRole
    {
        public int UserId { get; set; }
        public int RoleId { get; set; }

        // Navigation
        public User? User { get; set; }
        public Role? Role_of_user { get; set; }
    }
}
