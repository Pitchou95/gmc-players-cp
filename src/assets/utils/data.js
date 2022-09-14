const projetsList = [
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
  },
  {
    categorie: "Social Media",
    customer: "Projet Personnel",
    id: "four",
    name: "Mobisiki",
    //   img: protfollios[0],
    title:
      "Gestion de dossiers médicaux des patients et leurs médecins traitantsl",
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
  },
];

export default projetsList;
