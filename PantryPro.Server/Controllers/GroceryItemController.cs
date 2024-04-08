using Microsoft.AspNetCore.Mvc;
using PantryPro.Server.DataBase;



namespace PantryPro.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GroceryItemController : ControllerBase
    {
        private static readonly string[] Descriptions = new[]
        {
            "Fruit", "Vegetable(s)", "Meat", "Whole grains", "Beverage", "Alcohol", "Nuts", "Oils", "Legumes"
        };

        private readonly PantryProAppContext _dbContext;
        private readonly ILogger<GroceryItemController> _logger;

        public GroceryItemController(PantryProAppContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet(Name = "GetGroceryItems")]
        public ActionResult<IEnumerable<GroceryItem>> GetGroceryItem()
        {
            _dbContext.Database.EnsureCreated();
            return _dbContext.GroceryItem.ToList();
        }

        [HttpGet("{Id}")]

        public ActionResult<GroceryItem> GetGroceryItemById(int id)
        {
            var groceryItemId = _dbContext.GroceryItem.Find(id);
            if (groceryItemId == null)
            {
                return NotFound();
            }
            return groceryItemId;
        }

        [HttpPost]
        public ActionResult<GroceryItem> CreateGroceryItem([FromBody] GroceryItem GItem)
        {
            _dbContext.GroceryItem.Add(GItem);
            _dbContext.SaveChanges();
            return CreatedAtAction(nameof(GetGroceryItemById), new { id = GItem.Id }, GItem);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateGroceryItem(int id, [FromBody] GroceryItem updatedGItem)
        {
            var GItemId = _dbContext.GroceryItem.Find(id);
            if (GItemId == null)
            {
                return NotFound();
            }

            GItemId.Description = updatedGItem.Description;
            _dbContext.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteGroceryItem(int id)
        {
            var GItemId = _dbContext.GroceryItem.Find(id);
            if (GItemId == null)
            {
                return NotFound();
            }
            _dbContext.GroceryItem.Remove(GItemId);
            _dbContext.SaveChanges();
            return NoContent();
        }

        public IEnumerable<GroceryItem> Get()
        {
            var groceryItemType = new GroceryItemType();
            groceryItemType.Description = "Fruit";

            return Enumerable.Range(1, 5).Select(index => new GroceryItem
            {
                Description = Descriptions[Random.Shared.Next(Descriptions.Length)],
                Protein = Random.Shared.Next(0, 300),
                Carbs = Random.Shared.Next(0, 100),
                Calories = Random.Shared.Next(0, 2000),
                Fat = Random.Shared.Next(0, 100),
                GroceryItemType = groceryItemType,
            })
            .ToArray();
        }
    }
}
