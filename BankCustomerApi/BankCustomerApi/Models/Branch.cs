using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BankCustomerApi.Models
{
    [Table("Branch", Schema = "training")]
    public class Branch : AuditableEntity
    {
        [Key]
        public int BranchID { get; set; }

        [ForeignKey("Bank")]
        public int BankID { get; set; }

        [Required, StringLength(100)]
        public required string BranchName { get; set; }

        [StringLength(150)]
        public required string Location { get; set; }

        [StringLength(20)]
        public required string IFSCCode { get; set; }

        public required virtual Bank Bank { get; set; }
        public required virtual ICollection<Account> Accounts { get; set; }
    }
}
