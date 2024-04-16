using System.ComponentModel.DataAnnotations;

namespace PantryPro.Server
{
    public class GroceryItem
    {
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Description { get; set; } = default!;

        public int Protein { get; set; }

        public int GroceryItemTypeId { get; set; }

        public int Carbs { get; set; }

        public int Calories { get; set; }

        public int Weight { get; set; }

        public int Fat { get; set; }
        public GroceryItemType GroceryItemType { get; set; } = default!;
    }
}
