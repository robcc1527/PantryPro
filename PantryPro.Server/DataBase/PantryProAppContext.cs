using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace PantryPro.Server.DataBase;

public class PantryProAppContext : DbContext
{
    public PantryProAppContext()
    {
    }

    public PantryProAppContext(DbContextOptions<PantryProAppContext> options)
    : base(options)
    {

    }

    public virtual DbSet<GroceryItem> GroceryItem { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
    => optionsBuilder.UseNpgsql("Host=localhost; Port:5432; Database=pantry-pro-db; Username=pguser; Password=password");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<GroceryItem>(entity =>{
            entity.HasKey(e => e.Id).HasName("gtoceryItem_key");
        });

        OnModelCreatingPartial(modelBuilder);
    }
    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
