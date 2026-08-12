namespace MedicalCenterSystem.Models.ViewModels;

public class ReviewViewModel
{
    public int Id { get; set; }

    public string ReviewerName { get; set; } = string.Empty;

    public string Content { get; set; } = string.Empty;

    public int Rating { get; set; }

    public string? GoogleReviewUrl { get; set; }
}