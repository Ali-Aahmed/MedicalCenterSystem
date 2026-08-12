namespace MedicalCenterSystem.Models.ViewModels;

public class ServiceViewModel
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string? ShortDescription { get; set; }

    public string? ImageUrl { get; set; }

    public int DisplayOrder { get; set; }
}