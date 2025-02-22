import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "Richi tours rental",
    description:
      "A modern web application connecting clients to aruban island tours",
    image: "richi.png",
    tech: ["Vue.js", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Luisrome01/Richi-Front",
    live: "https://richitoursrental.net/",
    details: {
      problem:
        "No way to contact the business for their service tour offerings",
      solution:
        "Built a streamlined modern web app for their display of tours and contact",
      features: [
        "Display of their Tours information",
        "Gallery of images",
        "Contact us Form and Socials",
        "Reviews portal",
      ],
    
    },
  },



  {
    title: "Quercia ",
    description: "A landing page for a full-service ecommerce accelerator",
    image: "querciaweb.png",
    tech: ["React.js", "TypeScript"],
    github: "",
    live: "https://www.quercia.io/",
    details: {
      problem: "Unprofessional ways to contact the business",
      solution:
        "Created an intuitive contact platform with their information displayed",
      features: [
        "Features of the Business",
        "Gallery of pictures",
        "Contact Us Form",
      ],
      impact: "Reduced meeting scheduling time by 80% for users",
    },
  },




  {
    title: "BillMaster",
    description:
      "A modern web application designed for a supermarket cashier",
    image: "BillMaster.png",
    tech: ["React.js", "MongoDB", "Express"],
    github: "https://github.com/Luisrome01/BillMaster",
    live: "",
    details: {
      problem:
        "Data being lost on invoice creation for a supermarket",
      solution:
        "Solution solving web app for a supermarket",
      features: [
        "Shop Cart",
        "Client creation by ID",
        "Invoice Creation for every order",
        "Payment method for any orders",
      ],
    
    },
  },
  {
    title: "INSAWORK ",
    description: "Web portal for medical appointments and medical patient history",
    image: "insawork.png",
    tech: ["React.js", "TypeScript"],
    github: "https://github.com/Luisrome01/INSAWORK-front",
    live: "",
    details: {
      problem: "Lack of technological interfaces for this specific niche",
      solution:
        "Created a secure and intiuitive web app for medical information",
      features: [
        "Login and  every variation of sessions",
        "Medical Appointmets with email notifications and reminders",
        "Patients medical history ",
        "Inovice generations ",
        "Medical reports Generations",
      ],
      impact: "Reduced meeting scheduling time by 80% for users",
    },
  },
  
  
];
