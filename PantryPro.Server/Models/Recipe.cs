using System.ComponentModel.DataAnnotations;


namespace PantryPro.Server.Models
{
    public class Recipe
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; } = default!;

        [Required]
        [StringLength(100)]
        public string Instructions { get; set; } = default!;

        public Users Users { get; set; } = default!;
    }
}