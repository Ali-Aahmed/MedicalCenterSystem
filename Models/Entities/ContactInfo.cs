namespace MedicalCenterSystem.Models.Entities;

public class ContactInfo
{
    public int Id { get; set; }

    public string Phone { get; set; } = string.Empty;

    public string? WhatsApp { get; set; }

    public string? Email { get; set; }

    public string? Address { get; set; }

    public string? GoogleMapsUrl { get; set; }

    public string? FacebookUrl { get; set; }

    public string? InstagramUrl { get; set; }
}