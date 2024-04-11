
using PantryPro.Server;
using PantryPro.Server.DataBase;


namespace Persistence
{
    public class SeedType
    {
        public static async Task SeedData(PantryProAppContext context)
        {
            if (context.GroceryItemType.Any()) return;

            var itemType = new List<GroceryItemType>
            {
                new GroceryItemType
                {
                    Id = 1,
                    Description = "Fruit",
                },
                new GroceryItemType
                {
                    Id = 2,
                    Description = "Vegetable(s)",
                },
                new GroceryItemType
                {
                    Id = 3,
                    Description = "Meat",
                },
                new GroceryItemType
                {
                    Id = 4,
                    Description = "Whole grains",
                },
                new GroceryItemType
                {
                    Id = 5,
                    Description = "Beverage",
                },
                new GroceryItemType
                {
                    Id = 6,
                    Description = "Alcohol",
                },
                new GroceryItemType
                {
                    Id = 7,
                    Description = "Nuts",
                },
                new GroceryItemType
                {
                    Id = 8,
                    Description = "Oils",
                },
                new GroceryItemType
                {
                    Id = 9,
                    Description = "Legumes",
                },
            };

            await context.GroceryItemType.AddRangeAsync(itemType);
            await context.SaveChangesAsync();
        }
    }
}