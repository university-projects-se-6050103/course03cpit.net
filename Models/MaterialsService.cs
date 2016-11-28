using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace apartment_renovation_cost.Models
{
    public class MaterialsService
    {
        private static readonly DbSet<Material> Materials = new MaterialContext().materials;

        public static double GetPriceFor(string materialName)
        {
            return Materials
                .Where(m => m.name == materialName)
                .Select(m => m.price)
                .FirstOrDefault();
        }
    }
}