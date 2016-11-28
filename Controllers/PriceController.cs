using System;
using System.Collections.Generic;
using System.Linq;
using apartment_renovation_cost.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace apartment_renovation_cost.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowSpecificOrigin")]
    public class PriceController : Controller
    {
        private readonly MaterialContext _db = new MaterialContext();

        // POST api/price
        [HttpPost]
        [EnableCors("AllowSpecificOrigin")]
        public double Post([FromBody] UserInput userInput)
        {
            Console.WriteLine("Hello floor " + userInput.floor);
            return 2.0;
        }
    }

    public class UserInput
    {
        public string floor { get; set; }
        public string ceiling { get; set; }
        public string walls { get; set; }
        public string windows { get; set; }
        public List<RoomDimension> rooms { get; set; }
    }

    public class RoomDimension
    {
        public int x { get; set; }
        public int y { get; set; }
        public int z { get; set; }
    }
}