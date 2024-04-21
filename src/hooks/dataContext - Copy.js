import React, { useContext } from "react";
import * as IE from "../importAndExports.js";

const WrapData = React.createContext();

function useDataContext() {
  return useContext(WrapData);
}

const DataProviderContext = ({ children }) => {
  const data = {
    // RESUME OR VIEWABLE
    // Alert: please ensure if you add or remove the data , the stylling and components are  proper executable.

    // Alert: don't forget to enter default data

    headerTitle: "Jaganathan Portfolio",
    styleData: {
      patternColors: [
        "rgb(3, 3, 3)",
        "rgb(20,33,61)",
        "rgb(252,163,17)",
        "rgb(229,229,229)",
        "rgb(255,255,255)",
      ],
      TEXT_SIZE: {
        large: "48px",
        largeMedium: "36px",
        medium: "32px",
        mediumSmall: "21px",
        small: "16px",
      },
    },
    navLinks: [
      {
        txt: "Home",
        link: "#home",
      },
      {
        txt: "Education",
        link: "#education",
      },
      {
        txt: "Project",
        link: "#project",
      },
      {
        txt: "Resume",
        link: "https://tourism.gov.in/sites/default/files/2019-04/dummy-pdf_2.pdf",
      },
    ],
    myPhoto: "../Asset/Photos/me.png",
    favicon: IE.faviconPNG,
    logoName: "Jaganathan",
    landingQuotes: "i want to make things that make a difference.",
    landingTitle: "Hello, I'm Jaganathan",
    landingDestination: "Frontend developer",
    landingProfilePic: IE.myProfilePic,
    aboutSec:
      "I am proud to have a frontend developer , I enjoy crafting intuitive and visually appealing interfaces that deliver delightful user experiences. Teamwork and collaboration are essential to me, and I enjoy bouncing ideas around with colleagues. In my free time, I enjoy creating personal projects that explore new technologies and push my boundaries.",

    // Education Scetion.
    educationDetails: [
      {
        id: 1,
        clgName: "Government Higher Secondary School",
        course: "Secondary School Leaving Certificate(SSLC)",
        year: "2015",
        percentage: "80%",
      },
      {
        id: 2,
        clgName: "Government Higher Secondary School",
        course: "Higher Secondary Certificate(HSC)",
        year: "2017",
        percentage: "44%",
      },
      {
        id: 3,
        clgName: "Voorhees College",
        course: "B.Sc Computer Science",
        year: "2020",
        percentage: "60%",
      },
      {
        id: 4,
        clgName: "Muthurangam Government Arts College",
        course: "M.Sc Computer Science",
        year: "2022",
        percentage: "76%",
      },
    ],

    // Skill
    // Alert : skillIcon property la image podu in google sheet
    skillDetails: [
      {
        skillCategory: "Programming Language",
        skills: [
          {
            skillName: "Java",
            skillIcon: <IE.FA.FaJava />,
            offLink: "//google.com",
          },
          {
            skillName: "Javascript",
            skillIcon: <IE.FA.FaJs />,
            offLink: "//google.com",
          },
        ],
      },
      {
        skillCategory: "Markup/Stylling",
        skills: [
          {
            skillName: "HTML",
            skillIcon: <IE.FA.FaHtml5 />,
            offLink: "//google.com",
          },
          {
            skillName: "CSS",
            skillIcon: <IE.FA.FaCss3 />,
            offLink: "//google.com",
          },
        ],
      },
      {
        skillCategory: "Web Technologies",
        skills: [
          {
            skillName: "React",
            skillIcon: <IE.FA.FaReact />,
            offLink: "//google.com",
          },
        ],
      },
      {
        skillCategory: "IDE",
        skills: [
          {
            skillName: "VS Code",
            skillIcon: "VS Code",
            offLink: "//google.com",
          },
          {
            skillName: "Android Studio extra name",
            skillIcon: "Android Studio",
            offLink: "//google.com",
          },
          {
            skillName: "Android Studio extra name 1",
            skillIcon: "Android Studio",
            offLink: "//google.com",
          },
          {
            skillName: "Android Studio extra name 2",
            skillIcon: "Android Studio",
            offLink: "//google.com",
          },
          {
            skillName: "Android Studio extra name 3",
            skillIcon: "Android Studio",
            offLink: "//google.com",
          },
        ],
      },
      {
        skillCategory: "Platform",
        skills: [
          {
            skillName: "Microsoft Windows",
            skillIcon: <IE.FA.FaWindows />,
            offLink: "//google.com",
          },
        ],
      },
    ],

    // Alert : Please render this section(project) conditionally.
    projectSec: [
      {
        projectTitle: "Hello World",
        projectThumbnail: IE.myProfilePic,
        releaseDate: "02/04/2024",
        projectDesc:
          "I am proud to have a frontend developer , I enjoy crafting intuitive and visually appealing interfaces that deliver delightful user experiences. Teamwork and collaboration are essential to me, and I enjoy bouncing ideas around with colleagues. In my free time, I enjoy creating personal projects that explore new technologies and push my boundaries.",
        myProjectLink: "google.com",
      },
      {
        projectTitle: "HW",
        projectThumbnail: IE.myProfilePic,
        releaseDate: "02/04/2024",
        projectDesc: "Hi , Welcome...",
        myProjectLink: "google.com",
      },
      {
        projectTitle: "Hi",
        projectThumbnail: IE.myProfilePic,
        releaseDate: "02/04/2024",
        projectDesc: "Hi , Welcome...",
        myProjectLink: "google.com",
      },
      {
        projectTitle: "Welcome",
        projectThumbnail: IE.myProfilePic,
        releaseDate: "02/04/2024",
        projectDesc: "Hi , Welcome...",
        myProjectLink: "google.com",
      },
      {
        projectTitle: "Hello World",
        projectThumbnail: IE.myProfilePic,
        releaseDate: "02/04/2024",
        projectDesc: "Hi , Welcome...",
        myProjectLink: "google.com",
      },
      {
        projectTitle: "Hello World",
        projectThumbnail: IE.myProfilePic,
        releaseDate: "02/04/2024",
        projectDesc: "Hi , Welcome...",
        myProjectLink: "google.com",
      },
      {
        projectTitle: "Hello World",
        projectThumbnail: IE.myProfilePic,
        releaseDate: "02/04/2024",
        projectDesc: "Hi , Welcome...",
        myProjectLink: "google.com",
      },
      {
        projectTitle: "Hello World",
        projectThumbnail: IE.myProfilePic,
        releaseDate: "02/04/2024",
        projectDesc: "Hi , Welcome...",
        myProjectLink: "google.com",
      },
      {
        projectTitle: "Hello World",
        projectThumbnail: IE.myProfilePic,
        releaseDate: "02/04/2024",
        projectDesc: "Hi , Welcome...",
        myProjectLink: "google.com",
      },
      {
        projectTitle: "Hello World",
        projectThumbnail: IE.myProfilePic,
        releaseDate: "02/04/2024",
        projectDesc: "Hi , Welcome...",
        myProjectLink: "google.com",
      },
    ],

    // Contact
    contactSec: {
      // Form style
      formStyleMsgMe: "lufocuto@hunmi.su",
      // Person detail
      personalContact: [
        {
          name: "Gmail",
          detail: "awueli@ka.mg",
        },
        {
          name: "Address",
          detail: "193 Gedat Park",
        },
      ],
      // Web Link or social media link
      webLink: [
        {
          domainName: "Github",
          domainIcon: <IE.FA.FaGithub /> || "",
          domainLink: "http://uwawol.qa/kocah",
        },
        {
          domainName: "Nakuri",
          domainIcon: <IE.FA.FaTwitter /> || "",
          domainLink: "http://omazu.es/tid",
        },
        {
          domainName: "Instagram",
          domainIcon: <IE.FA.FaInstagram /> || "",
          domainLink: "http://da.ca/ej",
        },
      ],
    },
  };
  return (
    <>
      <WrapData.Provider value={data}>{children}</WrapData.Provider>
    </>
  );
};

export { useDataContext, DataProviderContext };
