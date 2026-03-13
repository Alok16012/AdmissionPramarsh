export const courseData = {
    medical: {
        title: "Medical Courses",
        subtitle: "Your Gateway to a Career in Medicine",
        description: "The medical profession is one of the most noble and respected careers in the world. India is home to some of the finest medical colleges that produce world-class doctors every year.",
        eligibility: [
            { criterion: "Qualification", requirement: "10+2 with Physics, Chemistry, Biology/Biotechnology" },
            { criterion: "Min. Marks", requirement: "50% for General (40% for SC/ST/OBC)" },
            { criterion: "Entrance Exam", requirement: "National Eligibility cum Entrance Test (NEET)" },
            { criterion: "Age Limit", requirement: "Minimum 17 years as of Dec 31st" }
        ],
        branches: ["Cardiology", "Neurology", "Gastroenterology", "Pediatrics", "Dermatology", "Oncology", "Radiology", "Gynecology"],
        popularCourses: ["MBBS", "BDS", "BAMS", "BHMS", "BPT", "B.Sc Nursing"],
        topColleges: [
            { name: "AIIMS", location: "New Delhi" },
            { name: "Christian Medical College", location: "Vellore" },
            { name: "Armed Forces Medical College", location: "Pune" },
            { name: "Maulana Azad Medical College", location: "New Delhi" },
            { name: "Kasturba Medical College", location: "Manipal" }
        ]
    },
    engineering: {
        title: "Engineering Courses",
        subtitle: "Build the Future with Innovation",
        description: "Engineering remains one of the most sought-after career paths. With a plethora of specialization options and rapidly evolving technology, choosing the right branch is crucial.",
        eligibility: [
            { criterion: "Qualification", requirement: "10+2 with Physics, Chemistry, and Mathematics" },
            { criterion: "Min. Marks", requirement: "60% aggregate (may vary by college)" },
            { criterion: "Entrance Exam", requirement: "JEE Main, JEE Advanced, WBJEE, COMEDK" },
            { criterion: "Mandatory Subject", requirement: "Mathematics in 10+2" }
        ],
        branches: ["Computer Science", "Information Technology", "Mechanical Engineering", "Civil Engineering", "Electrical Engineering", "Electronics & Communication", "Biotechnology", "Data Science & AI"],
        popularCourses: ["B.Tech/B.E", "M.Tech", "Diploma in Engineering", "Integrated M.Tech"],
        topColleges: [
            { name: "IIT Bombay", location: "Mumbai" },
            { name: "IIT Delhi", location: "New Delhi" },
            { name: "NIT Trichy", location: "Tiruchirappalli" },
            { name: "BITS Pilani", location: "Pilani" },
            { name: "VIT Vellore", location: "Vellore" }
        ]
    },
    management: {
        title: "Management Courses",
        subtitle: "Developing Future Business Leaders",
        description: "Management education prepares students for leadership roles in various industries. We help you choose the right MBA or BBA program.",
        eligibility: [
            { criterion: "UG Qualification", requirement: "10+2 from a recognized board" },
            { criterion: "PG Qualification", requirement: "Graduation in any discipline (min 50%)" },
            { criterion: "Entrance Exam", requirement: "CAT, MAT, XAT, CMAT, SNAP" },
            { criterion: "Skills", requirement: "Analytical and Communication Skills" }
        ],
        branches: ["Finance", "Marketing", "Human Resources", "Operations", "International Business", "Agribusiness", "Healthcare Management", "Digital Marketing"],
        popularCourses: ["MBA", "BBA", "PGDM", "BMS"],
        topColleges: [
            { name: "IIM Ahmedabad", location: "Ahmedabad" },
            { name: "IIM Bangalore", location: "Bangalore" },
            { name: "XLRI Jamshedpur", location: "Jamshedpur" },
            { name: "FMS Delhi", location: "New Delhi" },
            { name: "SPJIMR Mumbai", location: "Mumbai" }
        ]
    },
    ayurveda: {
        title: "Ayurveda Courses",
        subtitle: "Holistic Healing through Ancient Wisdom",
        description: "Ayurveda is one of the oldest systems of medicine. BAMS students learn traditional Indian medicine combined with modern anatomy.",
        eligibility: [
            { criterion: "Qualification", requirement: "10+2 with Physics, Chemistry, and Biology" },
            { criterion: "Min. Marks", requirement: "50% in PCB aggregate" },
            { criterion: "Entrance Exam", requirement: "NEET UG" },
            { criterion: "Age Limit", requirement: "Min 17 years" }
        ],
        branches: ["Kayachikitsa", "Shalya Tantra", "Shalakya Tantra", "Prasuti Tantra", "Kaumarabhritya", "Panchakarma"],
        popularCourses: ["BAMS", "MD(Ayurveda)", "MS(Ayurveda)"],
        topColleges: [
            { name: "NIA Jaipur", location: "Rajasthan" },
            { name: "BHU", location: "Varanasi" },
            { name: "IPGTRA", location: "Jamnagar" },
            { name: "RAV", location: "New Delhi" }
        ]
    },
    pharmacy: {
        title: "Pharmacy Courses",
        subtitle: "Expertise in Medicine and Healthcare",
        description: "Pharmacy combines health science with chemical science to ensure the safe and effective use of pharmaceutical drugs.",
        eligibility: [
            { criterion: "Qualification", requirement: "10+2 with Physics, Chemistry, and Bio/Math" },
            { criterion: "Min. Marks", requirement: "50% aggregate" },
            { criterion: "Entrance Exam", requirement: "GPAT, NMIMS CET, State CETs" }
        ],
        branches: ["Pharmaceutics", "Pharmacology", "Pharmaceutical Chemistry", "Pharmacognosy", "Quality Assurance"],
        popularCourses: ["B.Pharm", "D.Pharm", "M.Pharm", "Pharm.D"],
        topColleges: [
            { name: "NIPER", location: "Mohali" },
            { name: "Jamia Hamdard", location: "New Delhi" },
            { name: "BITS Pilani", location: "Pilani" },
            { name: "ICT Mumbai", location: "Mumbai" }
        ]
    },
    paramedical: {
        title: "Paramedical Courses",
        subtitle: "The Backbone of Healthcare Services",
        description: "Paramedical professionals support doctors by providing clinical and diagnostic services.",
        eligibility: [
            { criterion: "Qualification", requirement: "10+2 with Science (PCB)" },
            { criterion: "Min. Marks", requirement: "45-50% aggregate" }
        ],
        branches: ["Nursing", "Medical Lab Tech", "Radiology", "Physiotherapy", "Optometry", "Dialysis Tech"],
        popularCourses: ["B.Sc Nursing", "B.Sc MLT", "BPT", "B.Sc OTT"],
        topColleges: [
            { name: "AIIMS", location: "Multiple" },
            { name: "PGIMER", location: "Chandigarh" },
            { name: "JIPMER", location: "Puducherry" },
            { name: "CMC Vellore", location: "Vellore" }
        ]
    },
    agriculture: {
        title: "Agriculture Courses",
        subtitle: "Scientific Methods for Sustainable Farming",
        description: "Agriculture courses cover everything from crop science to soil health and agribusiness.",
        eligibility: [
            { criterion: "Qualification", requirement: "10+2 with PCB/PCM/Agriculture" },
            { criterion: "Entrance Exam", requirement: "ICAR AIEEA, State Level Exams" }
        ],
        branches: ["Agronomy", "Horticulture", "Plant Breeding", "Soil Science", "Entomology", "Agricultural Economics"],
        popularCourses: ["B.Sc Agriculture", "M.Sc Agriculture", "B.Tech Agri"],
        topColleges: [
            { name: "IARI", location: "New Delhi" },
            { name: "GBPUAT", location: "Pantnagar" },
            { name: "TNAU", location: "Coimbatore" },
            { name: "PAU", location: "Ludhiana" }
        ]
    },
    law: {
        title: "Law Courses",
        subtitle: "Advocating for Justice and Rights",
        description: "Law education provides a deep understanding of legal systems and prepares students for advocacy and judiciary.",
        eligibility: [
            { criterion: "UG (5-year)", requirement: "10+2 from a recognized board" },
            { criterion: "Graduate (3-year)", requirement: "Any graduation degree" },
            { criterion: "Entrance Exam", requirement: "CLAT, AILET, LSAT India" }
        ],
        branches: ["Civil Law", "Criminal Law", "Corporate Law", "Cyber Law", "Intellectual Property", "International Law"],
        popularCourses: ["B.A. LL.B", "B.B.A. LL.B", "LL.M", "LLB"],
        topColleges: [
            { name: "NLSIU", location: "Bangalore" },
            { name: "NALSAR", location: "Hyderabad" },
            { name: "WBNUJS", location: "Kolkata" },
            { name: "NLUD", location: "New Delhi" }
        ]
    }
};
