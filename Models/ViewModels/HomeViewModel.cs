using MedicalCenterSystem.Models.Entities;

namespace MedicalCenterSystem.Models.ViewModels;

public class HomeViewModel
{
    public IEnumerable<ServiceViewModel> Services { get; set; }
        = new List<ServiceViewModel>();

    public IEnumerable<TreatmentJourneyStepViewModel> TreatmentJourney { get; set; }
        = new List<TreatmentJourneyStepViewModel>();

    public IEnumerable<SpecialistViewModel> Specialists { get; set; }
        = new List<SpecialistViewModel>();

    public IEnumerable<ReviewViewModel> Reviews { get; set; }
        = new List<ReviewViewModel>();
}