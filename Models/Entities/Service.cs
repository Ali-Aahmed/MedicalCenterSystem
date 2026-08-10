namespace MedicalCenterSystem.Models.Entities;

public class Service
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string? ShortDescription { get; set; }

    public string? Description { get; set; }

    public string? ImageUrl { get; set; }

    public bool IsActive { get; set; } = true;

    public int DisplayOrder { get; set; }

    public ICollection<Package> Packages { get; set; } = new List<Package>();
}