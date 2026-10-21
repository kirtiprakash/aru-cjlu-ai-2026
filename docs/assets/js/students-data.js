window.STUDENTS = [
  {
    name: "PinZhen You",
    photo: "assets/images/students/orian-pin-zhen-you-square.jpg",
    hometown: "Hangzhou, Zhejiang, China",
    studies: "Computer Science and Technology, China Jiliang University",
    interests: "Deep learning and Machine Learning",
    shortBio: "I am a computer science graduate in the 2026 ARU–CJLU cohort, and my interests sit where machine learning theory meets trustworthy AI. What I want to understand is how we tell whether a model is right for the right reasons — and how to test that systematically rather than by intuition.",
    approved: true
  },
  {
    name: "XuRui Shen",
    photo: "",
    hometown: "Hangzhou, Zhejiang, China",
    studies: "Computer Science and Technology, China Jiliang University",
    interests: "Artificial Intelligence, Machine Learning",
    shortBio: "As a member of the 2026 ARU–CJLU cohort, I focus on artificial intelligence and software engineering. I am interested in building practical AI solutions, exploring modern machine learning frameworks, and bridging the gap between theoretical algorithms and real-world applications.",
    approved: true
  },
  {
    name: "Kangcheng Xu",
    photo: "assets/images/students/kangcheng-xu.jpg",
    hometown: "Lianyungang, Jiangsu, China",
    studies: "Computer Science and Technology, China Jiliang University",
    interests: "Deep Learning, Machine Learning, Machine Vision, and Algorithm Engineering",
    shortBio: "I enjoy turning algorithms into tools that solve real problems. As a member of the 2026 ARU–CJLU cohort, I work on industrial vision and measurement using C++, Qt, and OpenCV, and explore the path from YOLO training to ONNX deployment. My interests span deep learning, machine learning, and reliable AI systems. What keeps me curious is the gap between a model that works in a demo and one that works on a factory floor.",
    approved: true
  },
  {
    name: "Sihan Li",
    photo: "assets/images/students/Sihan Li.jpg",                     
    hometown: "Hangzhou, Zhejiang, China",
    studies: "Physics, University of Toronto",
    interests: "Intelligent Control",
    shortBio: "I'm Sihan Li, a physics graduate from the University of Toronto with an interest in artificial intelligence, autonomous systems, and control theory. I'm particularly interested in how intelligent systems can learn and adapt to changing environments, with applications in autonomous driving and robotics.",
    approved: true
  },
   {
    name: "Zichen Ma",
    photo: "assets/images/students/Einstein.jpg",
    hometown: "Linyi, Shandong, China",
    studies: "Artificial Intelligence, China Jiliang University & Anglia Ruskin University",
    interests: "Medical Image Analysis, Semantic Web / Ontology, Deep Learning",
    shortBio: "I’m a student on the 2026 ARU-CJLU joint master programme. My background is medical imaging, and I’m currently exploring AI for medical images together with semantic data technologies and knowledge graphs.",
    approved: true
  },
  ...Array.from({ length: 22 }, (_, index) => {
    const number = String(index + 4).padStart(2, '0');
    return {
      id: `student-${number}`,
      name: `Student ${number}`,
      photo: "",
      hometown: "To be confirmed",
      studies: "Computing or related discipline — details to be confirmed",
      interests: "Future academic and professional interests to be added",
      shortBio: "This profile is reserved for a member of the 2026 ARU–CJLU cohort and will be completed after the student reviews and approves the wording.",
      approved: false
    };
  })
];
