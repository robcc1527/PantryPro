using Microsoft.AspNetCore.Mvc;

namespace PantryPro.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GroceryItemTypeController : ControllerBase
    {
        private static readonly string[] Descriptions = new[]
        {
            "Int", "String", "Array", "Boolean", "Long int", "Char", "Float", "Enum"
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
