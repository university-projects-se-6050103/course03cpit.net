using System.Collections.Generic;
using System.Linq;

namespace apartment_renovation_cost.Models
{
    public class RenovationCalculator
    {
        private readonly MaterialsService _materialsService;
        private List<Room> _rooms;
        private double _floorPrice;
        private double _ceilingPrice;
        private double _wallsPrice;
        private double _windowsPrice;

        public RenovationCalculator(MaterialsService materialsService)
        {
            _materialsService = materialsService;
        }

        public RenovationCalculator AddRooms(List<Room> rooms)
        {
            _rooms = rooms;
            return this;
        }

        public RenovationCalculator AddFloor(string material)
        {
            _floorPrice = _materialsService.GetPriceFor(material);
            return this;
        }

        public RenovationCalculator AddWalls(string material)
        {
            _wallsPrice = _materialsService.GetPriceFor(material);
            return this;
        }

        public RenovationCalculator AddCeiling(string material)
        {
            _ceilingPrice = _materialsService.GetPriceFor(material);
            return this;
        }

        public RenovationCalculator AddWindows(string material)
        {
            _windowsPrice = _materialsService.GetPriceFor(material);
            return this;
        }

        public double GetTotalPrice()
        {
            return _rooms.Aggregate(0.0, (currentPrice, room) => currentPrice
                                                                 + room.GetFloorArea() * _floorPrice
                                                                 + room.GetCeilingArea() * _ceilingPrice
                                                                 + room.GetWallsArea() * _wallsPrice
                                                                 + room.GetWindowsArea() * _windowsPrice);
        }
    }
}