using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PantryPro.Server.Models
{
    public class Pantry
    {
        public int Id { get; set; }

        public Ingredients Ingredients { get; set; } = default!;

        public Users Users { get; set; } = default!;

        public int Quantity {get; set;} = default!;

        
    }
}