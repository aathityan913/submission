using Microsoft.EntityFrameworkCore;
using System.Security;

namespace BankCustomerApi.Models
{
    public class TrainingContext : DbContext
    {
        public TrainingContext(DbContextOptions<TrainingContext> options)
            : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
       
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Bank> Banks { get; set; }
        public DbSet<Branch> Branches { get; set; }
        public DbSet<Transaction> Transactions { get; set; } // ✅ New table

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("training");
  

            // Account ↔ Transaction
            modelBuilder.Entity<Transaction>()
                .HasOne(t => t.Account)
                .WithMany(a => a.Transactions)
                .HasForeignKey(t => t.AccountID);

            modelBuilder.Entity<Transaction>()
                .HasOne(t => t.User)
                .WithMany()
                .HasForeignKey(t => t.PerformedBy)
                .OnDelete(DeleteBehavior.Restrict);
         modelBuilder.Entity<Account>()
        .HasOne(a => a.Bank)
        .WithMany(b => b.Accounts)
        .HasForeignKey(a => a.BankID)
        .OnDelete(DeleteBehavior.Restrict); // 👈 Prevent multiple cascade paths

            modelBuilder.Entity<Account>()
                .HasOne(a => a.Branch)
                .WithMany(b => b.Accounts)
                .HasForeignKey(a => a.BranchID)
                .OnDelete(DeleteBehavior.Restrict); // 👈 Or use Restrict here

            modelBuilder.Entity<Account>()
                .HasOne(a => a.User)
                .WithMany(u => u.Accounts)
                .HasForeignKey(a => a.UserID)
                .OnDelete(DeleteBehavior.Cascade); // keep cascade here if needed

            base.OnModelCreating(modelBuilder);
        }
    }
}
