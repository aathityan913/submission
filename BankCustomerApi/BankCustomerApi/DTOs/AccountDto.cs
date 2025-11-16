namespace BankCustomerApi.DTOs
{
    public class AccountDto
    {
        public int AccountNo { get; set; }
        public string AccountType { get; set; } = string.Empty;
        public string Currency { get; set; } = string.Empty;
        public decimal Balance { get; set; }
        public string Status { get; set; } = string.Empty;

        public int BankID { get; set; }
        public string BankName { get; set; } = string.Empty;

        public int BranchID { get; set; }
        public string BranchName { get; set; } = string.Empty;
    }
}
