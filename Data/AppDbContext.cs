using MedicalCenterSystem.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace MedicalCenterSystem.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<Service> Services => Set<Service>();
    public DbSet<Package> Packages => Set<Package>();
    public DbSet<Specialist> Specialists => Set<Specialist>();
    public DbSet<Article> Articles => Set<Article>();
    public DbSet<ArticleCategory> ArticleCategories => Set<ArticleCategory>();
    public DbSet<Video> Videos => Set<Video>();
    public DbSet<Review> Reviews => Set<Review>();
    public DbSet<GalleryImage> GalleryImages => Set<GalleryImage>();
    public DbSet<TreatmentJourneyStep> TreatmentJourneySteps => Set<TreatmentJourneyStep>();
    public DbSet<ContactInfo> ContactInfos => Set<ContactInfo>();
    public DbSet<WorkingHour> WorkingHours => Set<WorkingHour>();
}