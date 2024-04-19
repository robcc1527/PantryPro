using System.ComponentModel.DataAnnotations;

namespace PantryPro.Server
{
    public class GroceryItemPost
    {
        [Required]
        [StringLength(100)]
        public string Name { get; set; } = default!;
        public string? Description { get; set; }

        public int Protein { get; set; }

        public int GroceryItemTypeId { get; set; }

        public int Carbs { get; set; }

        public int Calories { get; set; }

        public int Weight { get; set; }

        public int Fat { get; set; }
        public int Quantity { get; set; }
        public string? ImageUrl { get; set; }
    }
}
