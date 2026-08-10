using MedicalCenterSystem.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace MedicalCenterSystem.Data.Configurations;

public static class EntityConfigurations
{
    public static void Configure(ModelBuilder modelBuilder)
    {
        // =========================
        // Service
        // =========================

        modelBuilder.Entity<Service>(entity =>
        {
            entity.ToTable("Services");

            entity.HasKey(x => x.Id);

            entity.Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(200);

            entity.Property(x => x.ShortDescription)
                .HasMaxLength(500);

            entity.Property(x => x.ImageUrl)
                .HasMaxLength(500);

            entity.HasIndex(x => x.Name);

            entity.HasMany(x => x.Packages)
                .WithOne(x => x.Service)
                .HasForeignKey(x => x.ServiceId)
                .OnDelete(DeleteBehavior.Cascade);
        });

        // =========================
        // Package
        // =========================

        modelBuilder.Entity<Package>(entity =>
        {
            entity.ToTable("Packages");

            entity.HasKey(x => x.Id);

            entity.Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(200);

            entity.Property(x => x.Description)
                .HasMaxLength(1000);

            entity.Property(x => x.Price)
                .HasPrecision(18, 2);

            entity.Property(x => x.Duration)
                .HasMaxLength(100);

            entity.HasIndex(x => x.ServiceId);
        });

        // =========================
        // Specialist
        // =========================

        modelBuilder.Entity<Specialist>(entity =>
        {
            entity.ToTable("Specialists");

            entity.HasKey(x => x.Id);

            entity.Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(200);

            entity.Property(x => x.Specialty)
                .HasMaxLength(200);

            entity.Property(x => x.Qualifications)
                .HasMaxLength(1000);

            entity.Property(x => x.ImageUrl)
                .HasMaxLength(500);
        });

        // =========================
        // ArticleCategory
        // =========================

        modelBuilder.Entity<ArticleCategory>(entity =>
        {
            entity.ToTable("ArticleCategories");

            entity.HasKey(x => x.Id);

            entity.Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(150);

            entity.Property(x => x.Description)
                .HasMaxLength(500);

            entity.HasIndex(x => x.Name)
                .IsUnique();

            entity.HasMany(x => x.Articles)
                .WithOne(x => x.ArticleCategory)
                .HasForeignKey(x => x.ArticleCategoryId)
                .OnDelete(DeleteBehavior.Restrict);
        });

        // =========================
        // Article
        // =========================

        modelBuilder.Entity<Article>(entity =>
        {
            entity.ToTable("Articles");

            entity.HasKey(x => x.Id);

            entity.Property(x => x.Title)
                .IsRequired()
                .HasMaxLength(300);

            entity.Property(x => x.Summary)
                .HasMaxLength(1000);

            entity.Property(x => x.AuthorName)
                .HasMaxLength(200);

            entity.Property(x => x.ImageUrl)
                .HasMaxLength(500);

            entity.HasIndex(x => x.ArticleCategoryId);
            entity.HasIndex(x => x.IsPublished);
            entity.HasIndex(x => x.PublishedAt);
        });

        // =========================
        // Video
        // =========================

        modelBuilder.Entity<Video>(entity =>
        {
            entity.ToTable("Videos");

            entity.HasKey(x => x.Id);

            entity.Property(x => x.Title)
                .IsRequired()
                .HasMaxLength(300);

            entity.Property(x => x.Description)
                .HasMaxLength(1000);

            entity.Property(x => x.VideoUrl)
                .IsRequired()
                .HasMaxLength(1000);

            entity.Property(x => x.ThumbnailUrl)
                .HasMaxLength(500);

            entity.HasIndex(x => x.IsPublished);
        });

        // =========================
        // Review
        // =========================

        modelBuilder.Entity<Review>(entity =>
        {
            entity.ToTable("Reviews", table =>
            {
                table.HasCheckConstraint(
                    "CK_Reviews_Rating",
                    "[Rating] >= 1 AND [Rating] <= 5"
                );
            });

            entity.HasKey(x => x.Id);

            entity.Property(x => x.ReviewerName)
                .IsRequired()
                .HasMaxLength(150);

            entity.Property(x => x.Content)
                .IsRequired()
                .HasMaxLength(1000);

            entity.HasIndex(x => x.IsApproved);
        });

        // =========================
        // GalleryImage
        // =========================

        modelBuilder.Entity<GalleryImage>(entity =>
        {
            entity.ToTable("GalleryImages");

            entity.HasKey(x => x.Id);

            entity.Property(x => x.ImageUrl)
                .IsRequired()
                .HasMaxLength(500);

            entity.Property(x => x.Title)
                .HasMaxLength(200);

            entity.Property(x => x.Description)
                .HasMaxLength(500);
        });

        // =========================
        // TreatmentJourneyStep
        // =========================

        modelBuilder.Entity<TreatmentJourneyStep>(entity =>
        {
            entity.ToTable("TreatmentJourneySteps");

            entity.HasKey(x => x.Id);

            entity.Property(x => x.Title)
                .IsRequired()
                .HasMaxLength(200);

            entity.Property(x => x.Description)
                .HasMaxLength(1000);

            entity.Property(x => x.Icon)
                .HasMaxLength(100);

            entity.HasIndex(x => x.StepNumber)
                .IsUnique();
        });

        // =========================
        // ContactInfo
        // =========================

        modelBuilder.Entity<ContactInfo>(entity =>
        {
            entity.ToTable("ContactInfos");

            entity.HasKey(x => x.Id);

            entity.Property(x => x.Phone)
                .IsRequired()
                .HasMaxLength(30);

            entity.Property(x => x.WhatsApp)
                .HasMaxLength(30);

            entity.Property(x => x.Email)
                .HasMaxLength(200);

            entity.Property(x => x.Address)
                .HasMaxLength(500);

            entity.Property(x => x.GoogleMapsUrl)
                .HasMaxLength(1000);

            entity.Property(x => x.FacebookUrl)
                .HasMaxLength(500);

            entity.Property(x => x.InstagramUrl)
                .HasMaxLength(500);
        });

        // =========================
        // WorkingHour
        // =========================

        modelBuilder.Entity<WorkingHour>(entity =>
        {
            entity.ToTable("WorkingHours");

            entity.HasKey(x => x.Id);

            entity.Property(x => x.DayOfWeek)
                .IsRequired();

            entity.HasIndex(x => x.DayOfWeek)
                .IsUnique();
        });
    }
}