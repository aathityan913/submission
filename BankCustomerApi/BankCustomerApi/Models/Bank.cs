using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BankCustomerApi.Models
{
    [Table("Bank", Schema = "training")]
    public class Bank : AuditableEntity
    {
        [Key]
        public int BankID { get; set; }

        [Required, StringLength(100)]
        public required string  BankName { get; set; }

        [StringLength(150)]
        public required string Headquarters { get; set; }

        public int? EstablishedYear { get; set; }

        public required virtual ICollection<Branch> Branches { get; set; }
        public required virtual ICollection<Account>  Accounts { get; set; }
    }
}
