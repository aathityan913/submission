namespace BankCustomerApi.DTOs
{
    public class UserListDto
    {
        public int UserID { get; set; } 
        public string Name { get; set; } = string.Empty;
        public string Contact { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;

        public List<string> Roles { get; set; } = new();
    }
}
