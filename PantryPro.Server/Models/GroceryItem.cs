using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PantryPro.Server
{
    [Table("groceryItem")]
    public class GroceryItem
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required]
        [Column("Description")]
        [StringLength(100)]
        public string Description { get; set; }

        public int Protein { get; set; }

        public int GroceryItemTypeId { get; set; }

        public int Carbs { get; set; }

        public int Calories { get; set; }

        public int Weight { get; set; }

        public int Fat { get; set; }
        public GroceryItemType GroceryItemType { get; set; }
    }
}
