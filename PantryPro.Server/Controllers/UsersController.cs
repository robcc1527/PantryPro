
using System.Data.Entity;
using Microsoft.AspNetCore.Mvc;
using PantryPro.Server.DataBase;
using PantryPro.Server.Models;

namespace PantryPro.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController: ControllerBase
    {

        private readonly PantryProAppContext _dbContext;
        private readonly ILogger<Users> _logger;


        public UsersController(
            PantryProAppContext dbContext,
            ILogger<Users> logger
            )
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        [HttpGet("{userName}")]
        public ActionResult<Users> GetUserById(string userName, string password)
         {
             var UserId = _dbContext.Users.Find(userName);     
             if (UserId == null)
             {
                return NotFound();
             }

           return UserId;
         }
    }
}