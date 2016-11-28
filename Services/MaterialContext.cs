using Microsoft.EntityFrameworkCore;

namespace apartment_renovation_cost.Models
{
    public class MaterialContext : DbContext
    {
        public DbSet<Material> materials { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=./materials.db");
        }
    }
}