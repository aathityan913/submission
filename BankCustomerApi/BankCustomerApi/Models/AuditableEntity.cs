using System;

namespace BankCustomerApi.Models
{
    // Common base for all entities
    public abstract class AuditableEntity
    {
        public DateTime CreatedDate { get; set; } = DateTime.Now;
        public DateTime? ModifiedDate { get; set; }
        public string? CreatedBy { get; set; }
        public string? ModifiedBy { get; set; }
    }
}
