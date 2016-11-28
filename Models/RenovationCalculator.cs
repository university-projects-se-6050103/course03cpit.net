namespace apartment_renovation_cost.Models
{
    public class RenovationCalculator
    {
        private readonly MaterialsService _materialsService;

        public RenovationCalculator(MaterialsService materialsService)
        {
            _materialsService = materialsService;
        }


    }
}