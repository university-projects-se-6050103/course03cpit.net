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

    public class Material
    {
        public int id { get; set; }
        public string name { get; set; }
        public double price { get; set; }
        public string category { get; set; }
    }
}