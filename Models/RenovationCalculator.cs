namespace apartment_renovation_cost.Models
{
    public class RenovationCalculator
    {
        private readonly MaterialsService _materialsService;
        private double _totalPrice;
        private const double FloorTax = 1.2;

        public RenovationCalculator(MaterialsService materialsService)
        {
            _materialsService = materialsService;
        }

        public RenovationCalculator AddFloor(string material, double area)
        {
            _totalPrice += FloorTax * area * _materialsService.GetPriceFor(material);
            return this;
        }

        public RenovationCalculator AddWalls(string material, double area)
        {
            _totalPrice += area * _materialsService.GetPriceFor(material);
            return this;
        }

        public RenovationCalculator AddCeiling(string material, double area)
        {
            _totalPrice += area * _materialsService.GetPriceFor(material);
            return this;
        }

        public RenovationCalculator AddWindows(string material, double area)
        {
            _totalPrice += area * _materialsService.GetPriceFor(material);
            return this;
        }

        public double GetTotalPrice()
        {
            return _totalPrice;
        }
    }
}