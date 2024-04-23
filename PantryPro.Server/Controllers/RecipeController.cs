using System.Data.Entity;
using Microsoft.AspNetCore.Mvc;
using PantryPro.Server.DataBase;
using PantryPro.Server.Models;

namespace PantryPro.Server.Controllers
{    
    [ApiController]
    [Route("[controller]")]
    public class RecipeController: ControllerBase
    {
        private readonly PantryProAppContext _dbContext;
        private readonly ILogger<RecipeController> _logger;


        public RecipeController(
            PantryProAppContext dbContext,
            ILogger<RecipeController> logger
            )
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        [HttpGet(Name = "GetRecipes")]
        public List<Recipe> GetRecipes()
        {
            var recipe = _dbContext.Recipe.Include("Recipe");
            return recipe.ToList();
        }

    }
}