interface EducationItem {
    title: string;
    location: string;
    description: string;
    date: string;
    icon: string;
  }
  
  const educationTimeline: EducationItem[] = [
    {
      title: "Master of Science in Computer Science",
      location: "Western Michigan University , MI, USA",
      description: "Specialization in Artificial Intelligence, Full-Stack Development.",
      date: "2023 - Present",
      icon: "school",
    },
    {
      title: "Bachelor of Science in Information Technology",
      location: "Vignan Institute of Technology and Science , HYD, INDIA",
      description: "Focus on Software Engineering, Data Structures, and UX Design.",
      date: "2019 - 2023",
      icon: "school",
    },
    
  ];
  
  export default educationTimeline;
  