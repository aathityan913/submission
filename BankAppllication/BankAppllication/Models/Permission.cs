namespace BankingAPI.Models
{
    public class Permission
    {
        public int Id { get; set; }
        public string Action { get; set; } = string.Empty;
        public string Resource { get; set; } = string.Empty;
        public int RoleId { get; set; }

        // Navigation
        public Role? Role { get; set; }
    }
}
