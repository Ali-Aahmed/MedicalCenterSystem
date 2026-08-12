namespace MedicalCenterSystem.Models.ViewModels;

public class SpecialistViewModel
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string? Specialty { get; set; }

    public string? Bio { get; set; }

    public string? ImageUrl { get; set; }

    public string? Qualifications { get; set; }

    public int DisplayOrder { get; set; }
}