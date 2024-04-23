using System.Data.Entity;
using Microsoft.AspNetCore.Mvc;
using PantryPro.Server.DataBase;
using PantryPro.Server.Models;


namespace PantryPro.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RecipeIngredientsController : ControllerBase
    {
        private readonly PantryProAppContext _dbContext;
        private readonly ILogger<RecipeIngredientsController> _logger;

        public RecipeIngredientsController(
            PantryProAppContext dbContext,
            ILogger<RecipeIngredientsController> logger
            )
        {
            _dbContext = dbContext;
            _logger = logger;
        }




    }
}