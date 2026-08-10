namespace MedicalCenterSystem.Models.Entities;

public class WorkingHour
{
    public int Id { get; set; }

    public DayOfWeek DayOfWeek { get; set; }

    public TimeSpan? OpeningTime { get; set; }

    public TimeSpan? ClosingTime { get; set; }

    public bool IsClosed { get; set; }
}