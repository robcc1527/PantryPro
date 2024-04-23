using Microsoft.EntityFrameworkCore;
using PantryPro.Server.Models;

namespace PantryPro.Server.DataBase;

public class PantryProAppContext : DbContext
{
    public PantryProAppContext(DbContextOptions<PantryProAppContext> options)
    : base(options)
    {

    }

    public virtual DbSet<GroceryItemType> GroceryItemType { get; set; }
    public virtual DbSet<GroceryItem> GroceryItem { get; set; }
    public virtual DbSet<Users> Users { get; set; }

    public virtual DbSet<Recipe> Recipe { get; set; }
}
