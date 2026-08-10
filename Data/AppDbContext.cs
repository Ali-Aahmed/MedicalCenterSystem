using Microsoft.EntityFrameworkCore;

namespace MedicalCenterSystem.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }
}