namespace MedicalCenterSystem.Models.Entities;

public class Review
{
    public int Id { get; set; }

    public string ReviewerName { get; set; } = string.Empty;

    public string Content { get; set; } = string.Empty;

    public int Rating { get; set; }

    public bool IsApproved { get; set; } = false;

    public int DisplayOrder { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}