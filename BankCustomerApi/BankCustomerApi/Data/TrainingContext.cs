using Microsoft.EntityFrameworkCore;

namespace BankCustomerApi.Models
{
    public class TrainingContext : DbContext
    {
        public TrainingContext(DbContextOptions<TrainingContext> options)
            : base(options) { }

        // ======================
        // DbSet Declarations
        // ======================
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Bank> Banks { get; set; }
        public DbSet<Branch> Branches { get; set; }
        public DbSet<Permission> Permissions { get; set; } // ✅ Correct entity name

        // ======================
        // Model Configuration
        // ======================
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("training");

            // ============================================================
            // Account Relationships
            // ============================================================
            modelBuilder.Entity<Account>()
                .HasOne(a => a.Bank)
                .WithMany(b => b.Accounts)
                .HasForeignKey(a => a.BankID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Account>()
                .HasOne(a => a.Branch)
                .WithMany(b => b.Accounts)
                .HasForeignKey(a => a.BranchID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Account>()
                .HasOne(a => a.User)
                .WithMany(u => u.Accounts)
                .HasForeignKey(a => a.UserID)
                .OnDelete(DeleteBehavior.Cascade);

            // ============================================================
            // Permission (Optional: if related to Role or User)
            // ============================================================
            modelBuilder.Entity<Permission>()
                .Property(p => p.PermissionName)
                .IsRequired()
                .HasMaxLength(100);

            modelBuilder.Entity<Permission>()
                .Property(p => p.Description)
                .HasMaxLength(150);

            // Optional: If Permission links to Role (future RBAC feature)
            // modelBuilder.Entity<Role>()
            //     .HasMany(r => r.Permissions)
            //     .WithOne()
            //     .HasForeignKey("RoleID")
            //     .OnDelete(DeleteBehavior.Cascade);

            base.OnModelCreating(modelBuilder);
        }
    }
}
