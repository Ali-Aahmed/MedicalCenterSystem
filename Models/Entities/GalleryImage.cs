namespace MedicalCenterSystem.Models.Entities;

public class GalleryImage
{
    public int Id { get; set; }

    public string ImageUrl { get; set; } = string.Empty;

    public string? Title { get; set; }

    public string? Description { get; set; }

    public int DisplayOrder { get; set; }

    public bool IsActive { get; set; } = true;
}