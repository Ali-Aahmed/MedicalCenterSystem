namespace MedicalCenterSystem.Models.Entities;

public class TreatmentJourneyStep
{
    public int Id { get; set; }

    public string Title { get; set; } = string.Empty;

    public string? Description { get; set; }

    public string? Icon { get; set; }

    public int StepNumber { get; set; }

    public bool IsActive { get; set; } = true;
}