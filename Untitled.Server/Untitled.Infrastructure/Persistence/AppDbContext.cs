using Microsoft.EntityFrameworkCore;

namespace Untitled.Infrastructure.Persistence;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options): base(options) { }
}