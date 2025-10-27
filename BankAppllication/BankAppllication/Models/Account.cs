using System.ComponentModel.DataAnnotations.Schema;
namespace BankingAPI.Models;
public class Account
{
    public int Id { get; set; }
    public string AccountType { get; set; } = "Savings";
    public string Currency { get; set; } = "INR";

    [Column(TypeName = "decimal(18,2)")]  // ✅ specify SQL type
    public decimal Balance { get; set; }

    public int UserId { get; set; }
    public int BranchId { get; set; }
    public bool IsOperatedByPOA { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public string Status { get; set; } = "Active";
}
