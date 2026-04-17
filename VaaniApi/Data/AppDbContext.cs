using Microsoft.EntityFrameworkCore;
using VaaniApi.Models;

namespace VaaniApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Improvement> Improvements { get; set; }
    }
}