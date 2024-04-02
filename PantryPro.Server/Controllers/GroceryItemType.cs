using Microsoft.AspNetCore.Mvc;

namespace PantryPro.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GroceryItemTypeController : ControllerBase
    {
        private static readonly string[] Descriptions = new[]
        {
            "Fruit", "Vegetable(s)", "Meat", "Whole grains", "Beverage", "Alcohol", "Nuts", "Oils", "Legumes"
        };

        private readonly ILogger<GroceryItemTypeController> _logger;

        public GroceryItemTypeController(ILogger<GroceryItemTypeController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetGroceryItemType")]
        public IEnumerable<GroceryItemType> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new GroceryItemType
            {
                Description = Descriptions[Random.Shared.Next(Descriptions.Length)],
            })
            .ToArray();
        }
    }
}
