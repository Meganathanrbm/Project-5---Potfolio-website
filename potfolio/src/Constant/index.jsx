import images from "./images";
import ContactsIcon from '@mui/icons-material/Contacts';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import GradeIcon from '@mui/icons-material/Grade';

export { default as Constant } from "./images";

export const navLinks = [
  { title: "Home", href: "#Home" , icon:<HomeIcon/>},
  { title: "About", href: "#About",icon:<InfoIcon/> },
  { title: "Skills", href: "#Skills", icon:<GradeIcon/> },
  { title: "Projects", href: "#Projects" , icon:<FileCopyIcon/>},
  { title: "Contact", href: "#Contact" , icon:<ContactsIcon/>},
];

export const skills = [
  {
    title: "Front-End Development",
    skills: [
      { name: "HTML5", imageSrc: images.html },
      { name: "CSS3", imageSrc: images.css },
      { name: "JavaScript", imageSrc: images.javascript },
      { name: "JSON", imageSrc: images.json },
      { name: "React", imageSrc: images.react },
      { name: "Redux", imageSrc: images.redux },
      { name: "Tailwind CSS", imageSrc: images.tailwind },
      { name: "Sass", imageSrc: images.sass }
    ]
  },
  {
    title: "Back-End Development",
    skills: [
      { name: "Node.js", imageSrc: images.node },
      { name: "NPM", imageSrc: images.npm },
      { name: "RESTful APIs", imageSrc: images.api },
      { name: "MongoDB", imageSrc: images.mongodb }
    ]
  },
  {
    title: "Tools and Utilities",
    skills: [
      { name: "Git", imageSrc: images.git },
      { name: "GitHub", imageSrc: images.github },
      { name: "VSCode", imageSrc: images.vscode },
      { name: "Excel", imageSrc: images.excel }
    ]
  }
];

