import cseDept from "../assets/department/cse_dept.jpg";
import meDept from "../assets/department/me_dept.jpg";
import eeDept from "../assets/department/ee_dept.jpg";
import civilDept from "../assets/department/civil_dept.jpg";
import cseSy from "../assets/pdf/cseSy.pdf";
import meSy from "../assets/pdf/meSy.pdf";
import eeSy from "../assets/pdf/eeSy.pdf";
import civilSy from "../assets/pdf/civilSy.pdf";

export const departments = [
  {
    name: "Computer Science Engineering (CSE)",
    code: "CSE",
    hod: "Ranju Marwaha",
    image: cseDept,
    syllabus: cseSy,
    text: "Coding, AI, software systems, cloud and problem solving for modern digital industries.",
  },
  {
    name: "Mechanical Engineering (ME)",
    code: "ME",
    hod: "Jyotismita Das",
    image: meDept,
    syllabus: meSy,
    text: "Design, thermal systems, production and manufacturing with strong practical lab training.",
  },
  {
    name: "Electrical Engineering (EE)",
    code: "EE",
    hod: "Gunjan Morya",
    image: eeDept,
    syllabus: eeSy,
    text: "Power systems, machines, control and energy technologies aligned with industry needs.",
  },
  {
    name: "Civil Engineering",
    code: "CIVIL",
    hod: "Khushneet Kaur",
    image: civilDept,
    syllabus: civilSy,
    text: "Structures, transportation, surveying and construction management for future infrastructure.",
  },
];
