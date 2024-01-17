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

