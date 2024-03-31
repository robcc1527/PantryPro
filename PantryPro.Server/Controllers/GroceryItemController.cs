using Microsoft.AspNetCore.Mvc;

namespace PantryPro.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GroceryItemController : ControllerBase
    {
        private static readonly string[] Descriptions = new[]
        {
            "Int", "String", "Array", "Boolean", "Long int", "Char", "Float", "Enum"
        };

        private readonly ILogger<GroceryItemController> _logger;

        public GroceryItemController(ILogger<GroceryItemController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetGroceryItem")]
        public IEnumerable<GroceryItem> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new GroceryItem
            {
                Description = Descriptions[Random.Shared.Next(Descriptions.Length)],
                Protein = Random.Shared.Next(0, 300),
                Carbs = Random.Shared.Next(0, 100),
                Calories = Random.Shared.Next(0, 2000),
                Fat = Random.Shared.Next(0, 100)
            })
            .ToArray();
        }
    }
}
