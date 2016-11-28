namespace apartment_renovation_cost.Models
{
    public class Room
    {
        public int x { get; set; }
        public int y { get; set; }
        public int z { get; set; }

        public double GetFloorArea()
        {
            return x * y * z;
        }

        public double GetCeilingArea()
        {
            return GetFloorArea();
        }

        public double GetWallsArea()
        {
            return (x * z * 2) + (y * z * 2) - GetWindowsArea();
        }

        public double GetWindowsArea()
        {
            return x / 3.2 * (y / 1.5);
        }
    }
}