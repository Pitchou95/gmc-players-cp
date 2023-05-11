const projetsList = [
  {
    categorie: "ERP-DashBoard",
    customer: "Personal SAAS",
    id: "five",
    name: "lara-ERP",
    //   img: protfollios[0],
    title:
      "ERP adapté aux petites et moyens entreprises de gérer leurs ventes plus efficacement",
    description:
      "Solution ERP personnalisée pour les petites entreprises afin de gérer efficacement leurs ventes. Créez facilement votre boutique en ligne, ajoutez vos marques, vos fournisseurs et gérez tous vos systèmes de vente. Ajoutez des clients et générez des devis et des factures pour toutes vos ventes. Entièrement personnalisable pour répondre à vos besoins spécifiques et disponible en tant que solution SAAS accessible depuis n'importe quel appareil disposant d'une connexion internet. Contactez-nous pour discuter de vos besoins et améliorer votre activité dès aujourd'hui.",
    tags: ["Php-Laravel", "MySql SGBD", "Bootstrap", "JavaScript(React-JS)"],
    galerie: () => {
      let arr = [];
      for (let i = 1; i < 7; i++) {
        arr[i] = require(`../../assets/img/portfolio/laraErp/${i}.png`);
      }
      return arr;
    },
    link: "https://erp.laraibi.net",
    img: require("../../assets/img/portfolio/1 (5).png"),
    gitHub: "https://github.com/Laraibi/"
  },
  {
    categorie: "Mobile App & AdminPanel",
    customer: "Sbs-Group",
    id: "sixe",
    name: "Dwyt Be",
    //   img: protfollios[0],
    title:
      "Dwyt BE: l'application mobile de prospection de SBS-Group.",
    description:
      "Une application mobile React Native conçue pour aider les prospecteurs de SBS-Group dans leur travail. L'application est liée à un panneau d'administration construit avec Laravel via une API REST, permettant une gestion efficace des prospects, la planification des rendez-vous et le suivi en temps réel de la progression des ventes. Profitez d'une intégration transparente entre l'application et le panneau d'administration, avec une interface conviviale qui permet une gestion et une analyse efficaces des données.",
    tags: ["Php-Laravel", "MySql SGBD", "Bootstrap", "JavaScript(React DOM & React-Native)",],
    galerie: () => {
      let arr = [];
      for (let i = 1; i < 7; i++) {
        arr[i] = require(`../../assets/img/portfolio/dwytBE/${i}.png`);
      }
      return arr;
    },
    link: "https://laraibi.tech",
    img: require("../../assets/img/portfolio/1 (6).png"),
    gitHub: "https://github.com/Laraibi/"
  },
  {
    categorie: "FullStack Web Application",
    customer: "Intelcia Groupe",
    id: "one",
    name: "IntraDay 2.0",
    //   img: protfollios[0],
    title: "DashBoard du departement WorkForce Management ",
    description:
      "Application WEB, permettant le pilotage des KPI du département WFM, ainsi que la centralisation de la DATA.",
    tags: [
      "Php-Laravel",
      "MySql",
      "Talend ETL",
      "Bootstrap",
      "jQuery",
      "VueJS",
    ],
    galerie: () => {
      let arr = [];
      for (let i = 1; i < 9; i++) {
        arr[i] = require(`../../assets/img/portfolio/intraday/${i}.jpg`);
      }
      console.log(arr);
      return arr;
    },
    link: "",
    img: require("../../assets/img/portfolio/1 (1).png"),
    gitHub: ""
  },
  {
    categorie: "FullStack Web Application",
    customer: "Goupe Scolaire xxx",
    id: "two",
    name: "LaRa-sMs",
    //   img: protfollios[0],
    title: "Application web permettant la gestion d'une école privée",
    description:
      "Digitalisation des actions quotidiennes permettant la gestion d'une école privée\nGestion des utilisateurs et leurs roles : Accèes, Ajout, Suppresion, Modification\nAffectation des elèves aux Classes ainsi que la gestion des classes\nEdition des plannings des groupes tout en offrant la possibilité de géré les taux de presence",
    tags: ["Php-Laravel", "MySql SGBD", "Bootstrap", "jQuery"],
    galerie: () => {
      let arr = [];
      for (let i = 1; i < 10; i++) {
        arr[i] = require(`../../assets/img/portfolio/SMS/${i}.jpg`);
      }
      return arr;
    },
    link: "https://sms.laraibi.tech/",
    img: require("../../assets/img/portfolio/1 (2).png"),
    gitHub: "https://github.com/Laraibi/SchoolManagementSystem"
  },
  {
    categorie: "Social Media",
    customer: "Projet Personnel",
    id: "three",
    name: "LaRa-SMeDiA",
    //   img: protfollios[0],
    title: "Site Web sous forme de réseau social",
    description:
      "Simulation d'un mini réseau social illustrant les différents actions offertes sur ce type d'application:\nConnexion et inscription des utilisateurs\nMise à jour des profiles utilisateurs\nPublication des posts\nAimer et commenter une publication\nSystem de chat privé entre les membres du réseau avec mise à jour réelle",
    tags: [
      "Php-Laravel",
      "MySql SGBD",
      "Bootstrap",
      "VueJS Eco-System",
      "Web Sockets",
    ],
    galerie: () => {
      let arr = [];
      for (let i = 1; i < 5; i++) {
        arr[i] = require(`../../assets/img/portfolio/S-Media/${i}.jpg`);
      }
      return arr;
    },
    link: "https://media.laraibi.tech",
    img: require("../../assets/img/portfolio/1 (3).png"),
    gitHub: "https://github.com/Laraibi/Crud_SPA_Vue3_Laravel8"
  },
  {
    categorie: "CRM-DashBoard",
    customer: "Projet Personnel",
    id: "four",
    name: "Mobisiki",
    //   img: protfollios[0],
    title:
      "Gestion de dossiers médicaux des patients et leurs médecins traitants",
    description:
      "Suivi et gestion des dossiers médicaux des patients d'une clinique:\nConnexion et inscription des utilisateurs\nAjout de patients et docteurs de la clinique\nSuivi des alergies et maladies des patients avec leurs médecins traitants",
    tags: ["Php-Laravel", "MySql SGBD", "Bootstrap", "JavaScript(jQuery)"],
    galerie: () => {
      let arr = [];
      for (let i = 1; i < 6; i++) {
        arr[i] = require(`../../assets/img/portfolio/mobikisi/${i}.jpg`);
      }
      return arr;
    },
    link: "https://mob.laraibi.tech",
    img: require("../../assets/img/portfolio/1 (4).png"),
    gitHub: "https://github.com/Laraibi/Mobikisi"
  },

];

const technlogiesNames = ["CSS 3", 'HTML 5', "JavaScript", "jQuery", "Laravel", "MySQL", "PHP", "Python", "Vue JS", "React JS", "React Native", "Bottstrap", "Tailwind CSS", "Material UI", "Node JS", "MongoDB", "ExpressJS", "JSON", "Power BI", "MS Excel VBA"]

export { projetsList, technlogiesNames };
