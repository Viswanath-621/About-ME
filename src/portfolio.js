/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Viswanath Bodapati",
  title: "Hi, I'm Viswa",
  subTitle: emoji(
    "Programming in Python, C++, Java, and web development are all technical skills I possess. I currently serve as an NSS candidate in our college. My interests include coding, photography, and learning new things."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1DBdIUYm6iUpL-DUlMKA5OMxlXI3pNspX/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Viswanath-621",
  linkedin: "https://www.linkedin.com/in/viswanath-bodapati-56944714a/",
  gmail: "viswanathbodapti.career@gmail.com",
  gitlab: "https://gitlab.com/Viswanath-621",
  facebook: "https://www.facebook.com/Ado.621/photos_by",
  medium: "https://medium.com/@viswanathbodapati.career",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  codechef:"https://www.codechef.com/users/viswa_621",
  hackerrank: "https://www.hackerrank.com/dinakarbodapati",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Things I do",
  subTitle: "I write about things I know, things that trip up people I mentor, and things I'm learning.",
  skills: [
    emoji(
      "⚡ Using javascript and Python, I create data-driven things on a daily basis."
    ),
    emoji("⚡ I hone my coding skills in a variety of programming environments, including CodeChef, LeetCode, Hackerearth, and Code Ninja."),
    emoji(
      "⚡ You may find the majority of them on my CP profiles."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "SQL-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Blog",
      fontAwesomeClassname: "fab fa-medium"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Velagapudi Ramakrishna Siddhartha Engineering College",
      logo: require("./assets/images/vrseclogo.png"),
      subHeader: "Bachelors in Information Technology, 8.26 (G.P.A)",
      duration: "August 2020 - Present",
      desc: "",
      descBullets: [
        "Advanced Data Structures Algorithms, Agile Software Development",
        "Computer Networks, Data Analytics, Web and Text Mining"
      ]
    },
    {
      schoolName: "Little Flower Junior College",
      logo: require("./assets/images/lfjclogo.png"),
      subHeader: "Junior College Education MPC, 8.48 (G.P.A)",
      duration: "March 2018 - March 2020",
      desc: "Got 848 marks in Intermediate and achieved 1st prize in Inter College Football competition." ,
      descBullets: ["Got 94 percentile in JEE Mains 2020 among 6.43 lakh students.",
        "Secured 45k rank in VIT Entrance Exam.",
        "Ranked 22k in AP-EAMSET Examination."
    ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Coding & Data Structures", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Database languages",
      progressPercentage: "81%"
    },
    {
      Stack: "Frontend & Backend",
      progressPercentage: "69%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Science Intern",
      company: "Let's Grow More",
      companylogo: require("./assets/images/lgmlogo.png"),
      date: "January 2022 – February 2022",
      desc: 'Identified managerial objectives and problems that required attention through data analysis. The "Exploratory Data Analysis on Dataset-Terrorism" project was under progress. calculated the number of fatal and non-fatal injuries and the terrorist hotspot.',
    },
    {
      role: "Internshala Student Partner",
      company: "Internshala ",
      companylogo: require("./assets/images/isplogo.png"),
      date: "September 2021 - August 2021",
      desc: "I pushed my friends to apply for internships with Internshala and helped them gain new abilities by helping them with trainings. By resolving actual problems, I developed professionally and was able to build my marketing and communication skills from scratch." },
    {
      role: "Unniversity Innovation Fellow",
      company: "Standford University, D.School",
      companylogo: require("./assets/images/uiflogo.jpg"),
      date: "May 2022 - Present",
      desc: "Being a consistent team player and being proactive in your communications with coworkers and other team members. Providing a warm initial point of contact for academics and students, coordinating the event's admission and communication process for logistics, gathering and processing data from attendees from different nations, and acting as a point-of-contact for attendees when they are on-site." }
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Few Projects",
  subtitle: "While working on these projects, I researched to learn from my mistakes.",
  projects: [
    {
      image: require("./assets/images/Waterpro.jpg"),
      projectName: "Polluted Water Bodies Detection using LandSat 8 Satellite Images",
      projectDesc: "We use Land Sat 8 satellite imagery to locate waterbodies in Vijayawada that have high pollution levels using the Semi-Automation Plugin which is available in QGIS software.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/Viswanath-621/Water-Pollution-detection"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/terror.jpg"),
      projectName: "Exploratory Data Analysis on Dataset-Terrorism",
      projectDesc: "Using the data, pinpoint the terrorism hotspot. I visualised the important elements, including the annual attack rate in the country, US terrorist organisations.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/Viswanath-621/Data-Science-Internship-LGMVIP/blob/main/Exploratory_Data_Analysis_on_Dataset_Terrorism.ipynb"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Data Structures and Algorithms, GFG",
      subtitle:
        "As a participant in the engineers' first step to DSA programme, attend and learn about DS algorithms through real-world examples.",
      image: require("./assets/images/gfg-logo.jpg"),
      imageAlt: "GEEKSFORGEEKS Logo",
      footerLink: [
        {
          name: "Post",
          url: "https://www.linkedin.com/posts/viswanath-bodapati-56944714a_geeksforgeeks-geeks-opportunity-activity-6862013150951280640-FEhH?utm_source=share&utm_medium=member_desktop"
        },

        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1GHdtLZimn5Unv7RobTDUDAE_AyoAhrnw/view?usp=sharing"
        },
      ]
    },
    {
      title: "Badges & Certificates, Google Cloud",
      subtitle:
        "Completed a couple self-paced courses and developed real time projects to better understand the principles.",
      image: require("./assets/images/google_cloud.png"),
      imageAlt: "Google Cloud Logo",
      footerLink: [
        {
          name: "View Google Cloud Profile",
          url: "https://www.cloudskillsboost.google/public_profiles/9b8f9d44-a1ad-4ef7-b71a-5cb7dac1c72b"
        },
        {
          name: "View Google Developer Profile",
          url: "https://g.dev/viswa-621"
        }
      ]
    },

    {
      title: "Cisco-Netacad Academy",
      subtitle: "Completed the online trainings offered by Cisco and the exam.",
      image: require("./assets/images/Cisco-logo.png"),
      imageAlt: "Cisco Logo",
      footerLink: [
        {name: "C++ Certification", url: "https://drive.google.com/file/d/1CYfcObQtXXFN0a1hZM6UL-GPObESolKR/view?usp=sharing"},
        {
          name: "Python Certification",
          url: "https://drive.google.com/file/d/1-6Tosq3_xTdI4sWHdTn-jSQ6ZSdPqtrq/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false// Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7801084289",
  email_address: "viswanathbodapati.career@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "sundarpichai", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};