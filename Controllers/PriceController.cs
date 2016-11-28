using System.Collections.Generic;
using apartment_renovation_cost.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace apartment_renovation_cost.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowSpecificOrigin")]
    public class PriceController : Controller
    {
        private readonly MaterialsService _materialsService = new MaterialsService(new MaterialContext());

        // POST api/price
        [HttpPost]
        [EnableCors("AllowSpecificOrigin")]
        public double Post([FromBody] UserInput userInput)
        {
            return new RenovationCalculator(_materialsService)
                .AddRooms(userInput.rooms)
                .AddFloor(userInput.floor)
                .AddCeiling(userInput.ceiling)
                .AddWalls(userInput.walls)
                .AddWindows(userInput.windows)
                .GetTotalPrice();
        }
    }

    public class UserInput
    {
        public string floor { get; set; }
        public string ceiling { get; set; }
        public string walls { get; set; }
        public string windows { get; set; }
        public List<Room> rooms { get; set; }
    }
}