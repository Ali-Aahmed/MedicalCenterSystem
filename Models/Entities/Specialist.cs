namespace MedicalCenterSystem.Models.Entities;

public class Specialist
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string? Specialty { get; set; }

    public string? Bio { get; set; }

    public string? ImageUrl { get; set; }

    public string? Qualifications { get; set; }

    public bool IsActive { get; set; } = true;

    public int DisplayOrder { get; set; }
}