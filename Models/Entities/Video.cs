namespace MedicalCenterSystem.Models.Entities;

public class Video
{
    public int Id { get; set; }

    public string Title { get; set; } = string.Empty;

    public string? Description { get; set; }

    public string VideoUrl { get; set; } = string.Empty;

    public string? ThumbnailUrl { get; set; }

    public bool IsPublished { get; set; } = true;

    public int DisplayOrder { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}