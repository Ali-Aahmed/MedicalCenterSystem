namespace MedicalCenterSystem.Models.ViewModels;

public class TreatmentJourneyStepViewModel
{
    public int Id { get; set; }

    public string Title { get; set; } = string.Empty;

    public string? Description { get; set; }

    public string? Icon { get; set; }

    public int StepNumber { get; set; }
}