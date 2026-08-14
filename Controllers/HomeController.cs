using MedicalCenterSystem.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace MedicalCenterSystem.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        var model = new HomeViewModel
        {
            Services = GetDummyServices(),

            TreatmentJourney = GetDummyTreatmentJourney(),

            Specialists = GetDummySpecialists(),

            Reviews = GetDummyReviews()
        };

        return View(model);
    }


      
    private static IEnumerable<ServiceViewModel> GetDummyServices()
    {
        return new List<ServiceViewModel>
    {
        new ServiceViewModel
        {
            Id = 1,
            Name = "تأهيل العظام والمفاصل والعمود الفقري",
            ShortDescription =
                "علاج آلام الظهر والرقبة ومشاكل العمود الفقري، وتأهيل خشونة وتيبس المفاصل بخطط علاجية مخصصة لكل حالة.",
            ImageUrl = "/images/services/back-pain.jpg",
            DisplayOrder = 1
        },

      

        new ServiceViewModel
        {
            Id = 2,
            Name = "التأهيل بعد الجراحات",
            ShortDescription =
                "برامج تأهيل متخصصة بعد العمليات الجراحية مثل جراحات الركبة والكتف وعمليات تغيير المفاصل.",
                     ImageUrl = "/images/services/physical-therapy.jpg",
            DisplayOrder = 3
        },

        new ServiceViewModel
        {
            Id = 3,
            Name = "التأهيل العصبي",
            ShortDescription =
                "إعادة تأهيل ما بعد الجلطات الدماغية والحالات العصبية، لاستعادة الحركة والوظائف اليومية تدريجيًا.",
            ImageUrl = "/images/services/neuro-rehab.jpg",
            DisplayOrder = 4
        },

         new ServiceViewModel
        {
            Id = 4,
            Name = "تأهيل الإصابات الرياضية",
            ShortDescription =
                "علاج إصابات العضلات والمفاصل كالالتواءات والتمزقات، مع برنامج عودة تدريجي وآمن للنشاط الرياضي.",
           ImageUrl = "/images/services/rehabilitation.jpg",
            DisplayOrder = 2
        },
            new ServiceViewModel
        {
            Id = 5,
            Name = "تأهيل كبار السن",
            ShortDescription =
                "برامج علاجية لتحسين القدرة على المشي والتوازن، وتقليل خطر السقوط، وزيادة الاستقلالية الحركية.",
            ImageUrl = "/images/services/elderly-rehab.jpg",
            DisplayOrder = 5
        },

        new ServiceViewModel
        {
            Id = 6,
            Name = "العلاج الطبيعي للأطفال",
            ShortDescription =
                "برامج تأهيلية مصممة بما يتناسب مع احتياجات الأطفال وتطورهم الحركي.",
            ImageUrl = "/images/services/movement.jpg",
            DisplayOrder = 6
        },

        new ServiceViewModel
        {
            Id = 7,
            Name = "العلاج بالتقنيات والأجهزة الحديثة",
            ShortDescription =
                "الموجات التصادمية والموجات الصوتية والتحفيز الكهربائي، لتخفيف الالتهابات وتحفيز التئام الأنسجة وتنشيط العضلات.",
            ImageUrl = "/images/services/modalities.jpg",
            DisplayOrder = 7
        },

        new ServiceViewModel
        {
            Id = 8,
            Name = "العلاج اليدوي وتقنيات الأنسجة الرخوة",
            ShortDescription =
                "التدليك العلاجي لفك السدود والعقد العضلية، والإبر الجافة لنقاط الزناد، والعلاج بأكواب الهواء لتحسين الدورة الدموية.",
            ImageUrl = "/images/services/manual-therapy.jpg",
            DisplayOrder = 8
        },

        new ServiceViewModel
        {
            Id = 9,
            Name = "التصريف اللمفاوي المتخصص",
            ShortDescription =
                "تصريف لمفاوي لعلاج الوذمة اللمفاوية والتورمات، وكذلك تخفيف التورم والكدمات بعد عمليات التجميل.",
            ImageUrl = "/images/services/lymphatic-drainage.jpg",
            DisplayOrder = 9
        }
    };
    }

    private static IEnumerable<TreatmentJourneyStepViewModel> GetDummyTreatmentJourney()
    {
        return new List<TreatmentJourneyStepViewModel>
        {
            new TreatmentJourneyStepViewModel
            {
                Id = 1,
                StepNumber = 1,
                Title = "التقييم",
                Description =
                    "فهم الحالة وتقييم احتياجاتها بشكل دقيق قبل بدء البرنامج العلاجي.",
                Icon = "01"
            },

            new TreatmentJourneyStepViewModel
            {
                Id = 2,
                StepNumber = 2,
                Title = "خطة العلاج",
                Description =
                    "تصميم خطة علاجية مناسبة للحالة وأهدافها.",
                Icon = "02"
            },

            new TreatmentJourneyStepViewModel
            {
                Id = 3,
                StepNumber = 3,
                Title = "جلسات العلاج",
                Description =
                    "تنفيذ البرنامج العلاجي ومتابعة التطور خلال مراحل العلاج.",
                Icon = "03"
            },

            new TreatmentJourneyStepViewModel
            {
                Id = 4,
                StepNumber = 4,
                Title = "المتابعة",
                Description =
                    "متابعة النتائج وتقييم التقدم للوصول إلى أفضل مستوى ممكن من الحركة.",
                Icon = "04"
            }
        };
    }


    private static IEnumerable<SpecialistViewModel> GetDummySpecialists()
    {
        return new List<SpecialistViewModel>
        {
            new SpecialistViewModel
            {
                Id = 1,
                Name = "الدكتوره بشاير",
                Specialty = "دكتورة فى العلاج الطبيعي والتأهيل",
                Qualifications = "خبره أكثر من 8 سنوات في مجال العلاج الطبيعي والتأهيل",
                Bio =
                    "خبره أكثر من 8 سنوات في مجال العلاج الطبيعي والتأهيل" +
                    "\r\n\r\n* علاج وتأهيل كبار السن وإصابات ومشكلات الحركة." +
                    "\r\n* إعادة التأهيل بعد العمليات الجراحية." + 
                    "\r\n*علاج وتأهيل حالات مشاكل الأعصاب مثل الجلطات ." +
                      "\r\n* تقييم الحالات ووضع خطط علاجية فردية لمشكلات المفاصل والعمود الفقري." +
                    "\r\n* التعامل مع بعض المشكلات الوظيفية المرتبطة بالجهاز الهضمي والحوض، بما في ذلك المشكلات المرتبطة بالخلعه .\r\n* متابعة تطور الحالة وتعديل الخطة العلاجية وفقًا لاستجابة المريض.\r\n* تقديم التمارين العلاجية والإرشادات اللازمة لتحسين الحركة والوظائف اليومية",
                ImageUrl = "/images/specialists/specialist-1.jpg",
                DisplayOrder = 1
            },

            new SpecialistViewModel
            {
                Id = 2,
                Name = "الدكتوره فيّ",
                Specialty = "دكتورة فى العلاج الطبيعي",
                Qualifications = "متخصص في الرقبة والفقرات، تبديل المفاصل، الإصابات الرياضية  ",
                Bio =
                    "*خبرة في علاج مشكلات الرقبة وضعف حركة الفقرات\r\n\r\n* خبرة في علاج المشكلات الصحية لدى الأطفال \r\n\r\n* خبرة في التأهيل بعد عمليات تبديل المفاصل\r\n\r\n* خبرة في تأهيل حالات خشونة الركبة\r\n\r\n* خبرة في علاج الإصابات الرياضية\r\n\r\n* خبرة في علاج إصابات العضلات\r\n\r\n* خبرة في علاج آلام الظهر",
                ImageUrl = "/images/specialists/specialist-2.jpg",
                DisplayOrder = 2
            },

            new SpecialistViewModel
            {
                Id = 3,
                Name = "الأخصائى عبد الملك",
                Specialty = "إعادة التأهيل",
                Qualifications = "متخصص في برامج إعادة التأهيل",
                Bio =
                    "* علاج مشاكل الرقبة وضعف حركة الفقرات\r\n\r\n* علاج آلام الظهر\r\n\r\n* تأهيل ما بعد عمليات تبديل المفصل\r\n\r\n* تأهيل حالات خشونة الركبة\r\n\r\n* علاج الإصابات الرياضية\r\n\r\n* علاج إصابات العضلات",
                ImageUrl = "/images/specialists/specialist-3.jpg",
                DisplayOrder = 3
            },
             
        };
    }


    private static IEnumerable<ReviewViewModel> GetDummyReviews()
    {
        return new List<ReviewViewModel>
        {
            new ReviewViewModel
            {
                Id = 1,
                ReviewerName = "ميم",
                Content =
                    "الوالده جاتها جلطه سوينا لها جلسات علاجي طبيعي كثير اكثر تحسن شفناه ولله الحمد مع دكتوره بشاير  من ثاني جلسه بدت بتحريك يدها واصابعها وعدلت لها المشي الصحيح كانت تمشي ورجلها لافه .. الله يسعدها ويجزاها خير",
                Rating = 5,
                GoogleReviewUrl = "https://maps.app.goo.gl/BwtjDygyPv5Bx3yn8"
            },

            new ReviewViewModel
            {
                Id = 2,
                ReviewerName = "Lolo Mohamed",
                Content ="* “أشكر الدكتوره في على ،اسلوبها في العلاج “، كان رائع واهتمامها بي  واضح.”\r\n* “الله يعطيك العافية، استفدت من جلساتك كثير وحسّيت بفرق بفضل الله ثم بجهودك.”\r\n* “أنتِ متميزة في عملك، وتعاملك الراقي جعل تجربة العلاج مريحة جدًا.”\r\n* “ما شاء الله عليك، تجمعين بين الاحترافية والأخلاق العالية، شكرًا لك على كل ما قدمتيه.”",
                       Rating = 5,
                GoogleReviewUrl = "https://maps.app.goo.gl/TiE8dkmoR2TYkTRf6"
            },
            new ReviewViewModel
            {
                Id = 3,
                ReviewerName = "Badriyah",
                Content =
                    "الدكتوره بشاير المطيري فخر للفتاة السعوديه المكافحه بنت نفسه بنفسه جت تطل غلبت الكل🌹بمجرد زياره مركز بادره للعلاج الطبيعي راح تصدقون كلامي إن الدكتوره بشاير أخصائيه لامثيل له بكل مراكز بريده من جميع النواحي\r\nالتشخيص عنده فن والجلسات من أوله يتضح لك إنه عبقريه وبالنهايه الشفاء بيد الله عزوجل",
                Rating = 5,
                GoogleReviewUrl = "https://maps.app.goo.gl/WjJhtdGRLp95qiDB6"
            },

            new ReviewViewModel
            {
                Id = 4,
                ReviewerName = "مريم",
                Content =
                    "مركز بادره يستاهل خمس نجوم\r\nعشان الأخصائيه المتقنه بشاير\r\nالله يسعدها جيت على مدحه بقوقل ماب وطلعت فعلا قد المدح وزياده لطيفه جدا وفاهمه شغله ومريحه نفسيا\r\nوتحسنت حالتي عنده بدرجه كبيره جدا\r\nتمزج بين العلاج اليدوي والأجهزه\r\nشكرا لقلبه الطيب ❤️",
                Rating = 5,
                GoogleReviewUrl = "https://maps.app.goo.gl/HZe7yHTXBfWcCWg17"
            },

            new ReviewViewModel
            {
                Id = 5,
                ReviewerName = "Helh Salh",
                Content =
                    "يعطيها  العافيه دكتورة بشاير ماشاءالله تعامل رائع رائع  والاستقبال سهلين ومتعاونين 💕👍 …",
                Rating = 5,
                GoogleReviewUrl = "https://maps.app.goo.gl/SR8gL1reYhfV4ZDu8"
            }
        };
    }
}