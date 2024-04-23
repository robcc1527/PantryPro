
using System.ComponentModel.DataAnnotations;


namespace PantryPro.Server.Models
{
    public class RecipeIngredients
    {
        public int Id { get; set; }

        public Recipe Recipe { get; set; } = default!;
        public Ingredients Ingredients { get; set; }
    }
}