using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace apartment_renovation_cost.Models
{
    public class MaterialsService
    {
        private readonly DbSet<Material> _materials;

        public MaterialsService(MaterialContext materialContext)
        {
            _materials = materialContext.materials;
        }

        public double GetPriceFor(string materialName)
        {
            return _materials
                .Where(m => m.name == materialName)
                .Select(m => m.price)
                .FirstOrDefault();
        }
    }
}