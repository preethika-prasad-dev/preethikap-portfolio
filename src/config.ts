export const siteConfig = {
  name: "Preethika Prasad",
  title: "Graduate Student - MSCS at USC | Ex Software Engineer",
  description: "Portfolio website of Ryan Fitzgerald",
  accentColor: "#1d4ed8",
  social: {
    email: "preethikaprasad2510@gmail.com",
    linkedin: "https://www.linkedin.com/in/preethika-prasad",
    github: "https://github.com/preethika-prasad-dev",
  },
  aboutMe:
    "I am Preethika Prasad, currently pursuing my Master of Science in Computer Science at USC, focusing on advanced courses like Parallel and Distributed Systems, Machine Learning, and Software Management. My professional quality is that of a dedicated Software Development Engineer, specializing in architecting scalable, highly reliable distributed systems. I bring a unique blend of pragmatic problem-solving and a drive to innovate, notably by integrating cutting-edge GenAI technologies to enhance system intelligence and developer productivity. I am committed to technical excellence and thrive in collaborative, Agile environments, always striving to deliver maintainable, high-impact solutions. Let's build the future, one robust system at a time.",
  skills: ["Javascript", "React", "Node.js", "Python", "AWS", "Docker"],
  projects: [
    {
      name: "LLM-Based Document Query Processing Engine",
      description:
        "Developed an AI-driven semantic PDF retrieval system using PyPDF2, FAISS, and HuggingFace embeddings, incorporating vector-based text chunking and cosine-similarity search to enable concept-aware querying, outperforming traditional keyword methods.",
      link: "https://iaeme.com/Home/article_id/IJARCSE_01_02_001",
      skills: ["Machine Learning", "Predictive Modeling", "Python", "Tensorflow"],
    },
    {
      name: "AI-powered Computer Vision Assistive App for the Blind:",
      description:
        "Built an intelligent camera app to empower the visually impaired by providing real-time audio descriptions of surroundings using object detection (OpenCV), OCR for text recognition (Tesseract), face recognition with CNN, and Text-to-Speech (TTS) for auditory feedback.",
      link: "",
      skills: ["Machine Learning", "Deep Learning", "Python", "Tensorflow"],
    },
    // {
    //   name: "ExtensionKit",
    //   description:
    //     "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
    //   link: "https://extensionkit.io/?ref=devportfolio",
    //   skills: ["React", "Node.js", "AWS"],
    // },
  ],
  experience: [
    {
      company: "Moneyview",
      title: "Software Development Engineer I ",
      dateRange: "Jul 2023 - Jul 2024",
      bullets: [
        "Architected scalable microservices in Java Spring Boot with RESTful APIs for key Neobanking features from the Minimum Viable Product (MVP) stage, including beneficiary addition, statement generation and fund transfer workflows, leveraging AWS cloud services (S3, SQS, Lambda, EC2) and MySQL.",
      "Developed NeoPilot, a GenAI-based code review assistant to automate pull request analysis and documentation generation using LangChain RAG and GPT-4, cutting manual review time and boosting developer productivity.",
      "Redesigned the repeat loan flow architecture by automating pre-generation of loan offers using scheduled cron jobs at loan closure, reducing customer wait time from 5 days to under 30 seconds.",
      "Engineered a comprehensive Single Customer View platform to centralize customer data across multiple internal systems, eliminating legacy redundancy issues and ensuring consistent identity mapping across all business units.",
      "Cut infrastructure expenses for the CBS product through cost-effective optimizations of database queries, indexing, Redis caching on high-read operations, and removing idle EC2 instances, also improving API response times.",
      "Provided dedicated on-call support and resolved production issues by monitoring releases, troubleshooting Elastic-search logs, and working with DevOps teams to ensure high system uptime.",
      ],
    },
    {
      company: "Moneyview",
      title: "Software Development Engineer Intern",
      dateRange: "Feb 2023 - Jul 2023",
      bullets: [
        "Built a multi-channel communication system (SMS, Email, WhatsApp), delivering user-specific transactional and promotional messages via dynamic segment targeting and asynchronous processing using AWS SQS.",
        "Collaborated cross-functionally with product managers, UI designers (Figma), and QA engineers throughout the software development lifecycle, designing and deploying 120+ RESTful APIs for the savings account product.",
        "Built a GraphQL API to deliver real-time rewards analytics, enabling dynamic querying of user cashback trends.",
        "Managed deployments to staging and UAT environments via Jenkins pipelines, testing endpoints with Postman.",
        "Authored technical documentation, boosting onboarding efficiency for new developers, facilitated code reviews promoting best practices and earned a Certificate of Excellence from the Co-founder.",
      ],
    },
    // {
    //   company: "Digital Agency",
    //   title: "Frontend Developer",
    //   dateRange: "Aug 2018 - May 2020",
    //   bullets: [
    //     "Developed responsive web applications for 20+ clients",
    //     "Improved site performance scores by 35% on average",
    //     "Introduced modern JavaScript frameworks to legacy codebases",
    //   ],
    // },
  ],
  education: [
    {
      school: "University of Southern California ",
      degree: "Master of Science in Computer Science",
      dateRange: "Aug 2025 - May 2027",
      achievements: [
        "Courses Taken - Analysis of Algorithms, Machine Learning for Data Science, Database Systems, Deep Learning"
      ],
    },
    {
      school: "Visvesvaraya Technological University",
      degree: "Bachelor’s in Computer Science,",
      dateRange: "Aug 2019 - Jun 2023",
      achievements: [
        "Relavant Courses - Data Structure and Algorithm development, Object-Oriented Design, Artificial Intelligence "
      ],
    },
  ],
};
