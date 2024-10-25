/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Hi! its Abdullah",
  logo_name: "Abdullah Chaudhary",
  nickname: "",
  subTitle:
    "A full stack developer (MERN / MEVN) 💻 - A Community Builder 👨‍🏫 - Public Speaker 🎤",
  resumeLink:
    "https://drive.google.com/file/d/1bU2Ifkn877o9jP8qEO2AvsWTXe3oBWr_/view?usp=sharing",
  portfolio_repository: "https://github.com/abdullah-ch/devportfolio",
};

const socialMediaLinks = [
  {
    name: "Stackoverflow",
    link: "https://stackoverflow.com/users/13708712/abdullah-ch",
    fontAwesomeIcon: "fa-stack-overflow", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#F48024", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Github",
    link: "https://github.com/abdullah-ch",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abdullah-ch/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCNK0ZGO-8mnCGhtjUmFHyJg",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:abdullahchaudharry@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/MAbdullahCh10",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/mrabdullahch/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];
const socialMediaLinksHome = [...socialMediaLinks];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in full-stack web development with a focus on responsive web design using React JS, HTML/CSS and cool UI Libraries",
        "⚡ Expertise in developing Single Page Rendering applications using Vue JS, React JS and Next JS with Design Patterns",
        "⚡ Demonstrated ability in creating optimized application backends using Node JS, Express JS, and Nest Js.",
        "⚡ Experienced in creating REST APIs using Best Practices",
      ],

      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "mongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#13AA52",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "black",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multi-cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Routing DNS records across different websites with secure SSL certificates",
        "⚡ Enabling secure connection with IP access restrictions",
        "⚡ Storing data over uniquely modelled bucket lists from backend",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#8BA8B9",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Creating the flow of application functionalities to optimize user experience",
        "⚡ Enabling engaging user experience for generating leads",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            backgroundColor: "#31A8FF",
            borderRadius: "9px",
            padding: "1px 2px",
            color: "#001E36",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Coursera",
      iconifyClassname: "simple-icons:coursera",
      style: {
        color: "#3A67AE",
      },
      profileLink: "",
    },
    {
      siteName: "Udemy",
      iconifyClassname: "simple-icons:udemy",
      style: {
        color: "#E65050",
      },
      profileLink: "",
    },
    {
      siteName: "AWS",
      iconifyClassname: "logos:aws",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "#",
    },
    {
      siteName: "Qwiklabs",
      iconifyClassname: "simple-icons:qwiklabs",
      style: {
        color: "#EDC70E",
      },
      profileLink:
        "https://www.qwiklabs.com/public_profiles/8692b167-1af9-4c81-a795-789a654b1113",
    },
    {
      siteName: "Microsoft",
      iconifyClassname: "logos:microsoft-windows",
      style: {
        color: "#fda",
      },
      profileLink: "https://docs.microsoft.com/en-us/users/muhammadAbdullah/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National University of Sciences and Technology, Islamabad",
      subtitle: "Bachelor's in Computer Sciences",
      logo_path: "nust-logo.png",
      alt_name: "NUST - Islamabad",
      duration: "2018 - Present",
      descriptions: [
        "⚡ Gained deep insights of fundamental software engineering courses like DS, Algorithms, DBMS, OS, Advanced Programming, Artificial Intelligence etc.",
        "⚡ The transparent methodology of providing diversity and building confidence by NUST has helped to develop me as a person not to forget mentioning the community bonding techniques that talks about growth",
        "⚡ Apart from this, I have done courses on MERN Stack Development, Cloud Computing, Data Science, and Managing successful Start-ups",
        "⚡ My favorite co-curricular hobby has been to manage big tech communities since I have represented NUST as an MLSA, Google DSC Lead and AWS Educate Cloud Ambassador simultaneously",
      ],
      website_link: "https://nust.edu.pk/",
    },
    {
      title: "Hamza Army Public School and College, Rawalpindi",
      subtitle: "Intermediate and Primary",
      logo_path: "haps-logo.svg",
      alt_name: "HAPSAC",
      duration: "2006 - 2018",
      descriptions: [
        "⚡ Shortlisted as House Captain for school disciplines for two times in a row",
        "⚡ Swiftly conducted sports and other extra-curricular events in college",
        "⚡ Was awarded as 'Pride of Hamza' which is the highest ranked award in the college in my final year",
      ],
      website_link: "http://www.hamza.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Real-World problem solving and innovation",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1zODqrRzxxpqLr9tA46TM4j9-4yOcMEOh/view?usp=sharing",
      alt_name: "Microsoft",
      color_code: "#E48564",
    },
    {
      title: "Managing the Company of the Future",
      subtitle: "- Prof. Julian Birkinshow",
      logo_path: "uol-logo.png",
      certificate_link:
        "https://coursera.org/share/a04db611f13675addbc9ed77198d9528",
      alt_name: "univeristy of London",
      color_code: "#E9E9E9",
    },
    {
      title: "Introduction to Serverless Deployment",
      subtitle: "- AWS Training",
      logo_path: "aws-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1bJu0_lVEKHTASH-g02tNgwzz9F3_7FzS/view?usp=sharing",
      alt_name: "AWS",
      color_code: "#222E3C",
    },
    {
      title: "Deep Dive into DocumentDB",
      subtitle: "- AWS Training",
      logo_path: "aws-logo.png",
      certificate_link:
        "https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=ImgRkZjt5EWH9MnPQ5dDow2",
      alt_name: "AWS",
      color_code: "#222E3C",
    },

    {
      title: "Intro to ML: Language Processing",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/8692b167-1af9-4c81-a795-789a654b1113",
      alt_name: "Qwiklabs",
      color_code: "#8AB2F4",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.youracclaim.com/badges/053e0af0-c9be-4c47-8d1d-198ebe991e75/linked_in_profile",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Intro to ML: image Processing",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/8692b167-1af9-4c81-a795-789a654b1113",
      alt_name: "Qwiklabs",
      color_code: "#1F70C199",
    },
    {
      title: "Kubernetes in Google Cloud",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/8692b167-1af9-4c81-a795-789a654b1113",
      alt_name: "GCP",
      color_code: "#0C9D5899",
    },
    {
      title: "Performance Assessment at UNICEF",
      subtitle: "- UNICEF",
      logo_path: "UNICEF-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/11kl0jHW2IWN2O3Nq2lBJTd6cWgqI1eJl/view?usp=sharing",
      alt_name: "UNICEF",
      color_code: "#E9E9E7",
    },
    {
      title: "Intermediate ML: TensorFlow on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/8692b167-1af9-4c81-a795-789a654b1113",
      alt_name: "Qwiklabs",
      color_code: "#6AC097",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/8692b167-1af9-4c81-a795-789a654b1113",
      alt_name: "Google",
      color_code: "#4285F499",
    },
    {
      title: "Amazon ElastiCache Service Primer",
      subtitle: "- AWS Training",
      logo_path: "aws-logo.png",
      certificate_link:
        "https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=-onl1wc0xEC_ZGYcLyBBkw2",
      alt_name: "AWS",
      color_code: "#222E3C",
    },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    {
      title: "Machine Learning APIs",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/8692b167-1af9-4c81-a795-789a654b1113",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Machine Learning in the Cloud with AWS Batch",
      subtitle: "- AWS Training",
      logo_path: "aws-logo.png",
      certificate_link:
        "https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=VG0IjyOVVUigjOdlbsY4rw2",
      alt_name: "AWS",
      color_code: "#222E3C",
    },
    {
      title: "BigQuery Basics for Data Analysts",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/8692b167-1af9-4c81-a795-789a654b1113",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Amazon DynamoDB Service Primer",
      subtitle: "- AWS Training",
      logo_path: "aws-logo.png",
      certificate_link:
        "https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=djjRwh9lakiGZ13wZ7h1dA2",
      alt_name: "AWS",
      color_code: "#222E3C",
    },

    {
      title: "Data Science on Google Cloud",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/8692b167-1af9-4c81-a795-789a654b1113",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "AWS Foundations: Machine Learning Basics",
      subtitle: "- AWS Training",
      logo_path: "aws-logo.png",
      certificate_link:
        "https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=yDSgbKsl_kqxW_Pxq2LVEQ2",
      alt_name: "AWS",
      color_code: "#222E3C",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "I have worked with evolving Start-ups as well as some well-established companies as a Full Stack JavaScript Developer. I am one of the top 10 percent Software Engineers on Stackoverflow and my questions and answers have helped more than 6 million Developers all around the world !",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Senior Software Engineer",
          company: "RANA",
          company_url: "https://www.ranadev.io/",
          logo_path: "abdullah-work/ranadev-logo.jpeg",
          imageWrapperStyles: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          duration: "Mar 2024 - present",
          location: "remote",
          description:
            "Engineered  RESTful  APIs  for  a  FinTech  application  to  onboard  individual  and company  customers  with  third-party  banking  partners,  utilizing  Nest.js  and MongoDB for secure and seamless data exchange, reducing onboarding time by 40% and increasing completion rates by 30%. Intergrated  Know  Your  Customer  (KYC)  and  Customer  Due  Diligence  (CDD)services, helping global banking clients meet strict regulatory standards using NestJs, GraphQL and MongoDB. Developed and implemented unit tests using Jest in Nest Js, achieving over 90% testcoverage for new features, signicantly reducing production bugs, and enhancingapplication stability. Engineered  and  optimized  frontend  components  for  banking  applicationonboarding  using  Next.js,  integrating  GraphQL,  Redux  Toolkit,  and  React  HookForm.  Applied  Factory  and  Decorator  design  paerns  to  streamline  datamanagement and enhance code readibility and maintainability.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer II",
          company: "Dubizzle",
          company_url: "https://www.dubizzle.com/",
          logo_path: "abdullah-work/dubizzle-logo.png",
          imageWrapperStyles: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          duration: "Jan 2023 - Mar 2024",
          location: "Hybrid",
          description:
            "Designed and developed headless reusable components, decoupling the UI and the logic layers for better code maintainability and flexibility using React JS and Next JS. Improved code quality and maintainability by conducting component code refactoring and converting to TypeScript. Collaborated with cross-functional teams to develop effective software solutions, utilizing communication and problem-solving skills. Translated stakeholder requirements into actionable development plans for successful project outcomes ",
          color: "#0879bf",
        },
        {
          title: "Full Stack Software Engineer (MERN/MEVN)",
          company: "Trade Hat, USA",
          company_url: "https://app.quantbotics.com/",
          logo_path: "abdullah-work/tradehat.svg",
          imageWrapperStyles: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          duration: "Sep 2021 - Oct 2023",
          location: "Remote Work",
          description:
            "Optimized Webapp's bundle size by 15% through lazy loading, purging CSS, and migrating to lightweight libraries. Improved API security by implementing Refresh Token Rotation based Authentication with unique refresh tokens for each session using Node JS. Designed and implemented the mechanism, conducted thorough testing, and reduced the risk of data breaches. Designed and built a scalable WebSocket server with Node.js and the ws library, integrated with RabbitMQ for streaming real-time tickers' information and notifications.",
          color: "#0879bf",
        },

        {
          title: "Full Stack Software Engineer (MERN)",
          company: "BigOSoft",
          company_url: "https://bigosoft.us/",
          logo_path: "abdullah-work/bigosoft-black.png",
          duration: "April 2020 - Sep 2021",
          location: "Remote Work",
          imageWrapperStyles: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          description:
            "Built reusable React components with decoupled logic and UI layers using Hooks, improving code maintainability and development efficiency. Contributed to React-based POS and website front-end development using TypeScript and Material UI,delivering high-quality, responsive interfaces through collaboration with cross-functional teams. Created efficient and scalable RESTful APIs to support seamless communication between systems, ensuring productivity and minimizing downtime",
          color: "#0879bf",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Machine Learning Research Intern",
    //       company: "ROMI Lab, SEECS",
    //       company_url: "https://romi.seecs.nust.edu.pk/",
    //       logo_path: "romi-logo.png",
    //       duration: "April 2020 - September 2020",
    //       location: "SEECS, NUST",
    //       description:
    //         "Worked on project of converting 2D image into 3D using the help of Machine Learning. The project covered two main aspects: (1) To enuemerate normal prediction of a 2D image. (2) Using ML techniques to draw coordinates on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution. The project had the following scope: (a) Object Visualization for Uban Cities. (b) Generating/evaluating building hypothesis",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Software Quality Assurance Intern",
    //       company: "Afiniti",
    //       company_url: "https://www.afiniti.com/",
    //       logo_path: "afiniti-vector-logo.png",
    //       duration: "August 2020 - September 2020",
    //       location: "Work From Home",
    //       description:
    //         "Worked as a Software Quality Assurance Intern for an Enterprise software developed by Afiniti with a diverse group of 70+ students from multinational backgrounds. The work helped me build strong analytical approach. The agile feedbacks and suggestions improved the product to a greater extent. Ultimately, I gained keen knowledge of working in big corporates and been able to blend into their working environments.",
    //       color: "#0071C5",
    //     },
    //     {
    //       title: "Graphic Designer Intern",
    //       company: "Vyro.ai",
    //       company_url: "https://www.vyro.ai/",
    //       logo_path: "vyro.ai.png",
    //       duration: "Feb 2019 - Apr 2019",
    //       location: "TIC, NUST",
    //       description:
    //         "Mainly aimed to create face models for a photo editing mobile app using AI. The face features were designed using photoshop and illustrator. Used scripting for automation of rendering. The automation reduced the office overhead and labour by 60%. The initial boost helped the app to attain 1M+ downloads in the play store within a year. So far Vyro has more than 4 apps in play store with approximately 32M+ downloads.",
    //       color: "#0071C5",
    //     },
    //     {
    //       title: "Digital Marketing Intern",
    //       company: "Friends Corporation",
    //       company_url: "https://www.friendshome.pk/",
    //       logo_path: "friendshome.png",
    //       duration: "Jun 2016 - Jul 2016",
    //       location: "Murree Road, Rawalpindi",
    //       description:
    //         "Analyzed data from 25000+ monthly active users and used outputs to guide marketing and product strategies. Increased average online engagement time by 2x, 25% decrease in drop off rate, and 3x shares on social media.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Microsoft Learn Student Ambassador",
          company: "Microsoft",
          company_url: "https://studentambassadors.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - present",
          location: "ITU, Lahore",
          description:
            "Microsoft Student Ambassador is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops of GitHub and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Developer Student Club Lead - ITU",
          company: "Google Developers",
          company_url:
            "https://dsc.community.dev/information-technology-university/",
          logo_path: "gdsc-itu.jpeg",
          duration: "July 2020 - July 2021",
          location: "ITU, Lahore",
          description:
            "2nd ever lead from ITU and Pakistani DSC Chapter. Lead the club for one of the most prestigious universities in Pakistan. Conducted tonnes of events in order to make student the next big assests in the market. The program provides an ecosystem that encourages sharing of knowledge, learning and community building using the power of Google and its resources. Finally, it gives the exposure of mentoring people to become the next Google Developer Expert and preserving the chain.",
          color: "#4285F4",
        },
        {
          title: "AWS Comunity Builder",
          company: "AWS",
          company_url:
            "https://aws.amazon.com/developer/community/community-builders/",
          logo_path: "awsblack.png",
          duration: "Apr 2020 - May 2022",
          location: "ITU, Lahore",
          description:
            "Enabling students to learn the cloud based cooporate technology usage using AWS. Hosted webinars based on AWS and cloud-based technologies,Conducted workshops and Community Day event powered by AWS in Pakistan.",
          color: "#000000",
        },

        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "October 2020 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like StudentCodeIn, Hacktoberfest, flutter mobile apps, and MERN applications. These contributions include bug fixes, feature requests and formulating proper documentation for a project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects involve use of various tech architectures and tools including ReactJs, NextJs, Redux, Hooks, Nodejs, ExpressJs, MongoDB, HTML/CSS and Vue JS. My best experience is to create Full stack applications and deploy them using an efficient cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const blogs = {
  title: "Blogs",
  subtitle:
    "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character. This part is coming soon feel free to reach out again for follow up 😉",
  link: "/",
  avatar_image_path: "blogs_image.svg",
  section: [
    {
      title: "My first ever blog",
      date: "20-09-2020",
      text: "abc",
      image:
        "https://image.shutterstock.com/image-photo/islamabad-pakistan-april-25-2019-260nw-1407461093.jpg",
    },
    {
      title: "My second ever blog",
      date: "20-09-2020",
      text: "abc",
      image:
        "https://image.shutterstock.com/image-photo/islamabad-pakistan-april-25-2019-260nw-1407461093.jpg",
    },
    {
      title: "My third ever blog",
      date: "20-09-2020",
      text: "abc",
      image:
        "https://image.shutterstock.com/image-photo/islamabad-pakistan-april-25-2019-260nw-1407461093.jpg",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "address_image.svg",
    description:
      "I am available on almost every social media. And here is the fun part, I'm very responsive, so feel free to reach me out if you want a Freelance work to be done or need a speaker for your tech talk. You can hit me up and have a Tech Savvy advice too! I can help you with MERN / MEVN Stack and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "B/1325, Satellite Town, Rawalpindi, Punjab, Pakistan",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+92 3124108473",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  socialMediaLinksHome,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  blogs,
};
