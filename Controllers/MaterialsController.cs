using System.Collections.Generic;
using System.Linq;
using apartment_renovation_cost.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace apartment_renovation_cost.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowSpecificOrigin")]
    public class MaterialsController : Controller
    {
        private readonly MaterialContext _db = new MaterialContext();

        // GET api/materials?category=some
        [HttpGet]
        public IEnumerable<string> Get([FromQuery] string category)
        {
            return _db.materials
                .Where(material => material.category == category)
                .Select(material => material.name);
        }
    }
}