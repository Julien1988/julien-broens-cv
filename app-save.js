(() => {
  // Gestion de l'affichage des SKILLS via le click

  let getDomElement = document.querySelector(".main__section__container");
  let skillsButton = document.getElementById("showMySkills");
  let getDomElementTitle = getDomElement.children[0];
  let getDomElementSubtitle = getDomElement.children[1];
  let skillsArray = ["M", "y", " ", "S", "k", "i", "l", "l", "s", " "];

  const myName = "Julien Broens - Web developer";
  // Texte à afficher
  const myContact = "julienbroens@gmail.com";
  const myLinkedinContact =
    "https://www.linkedin.com/in/julien-broens-24b465184";
  const myAdress = "Tienne Jean-Pierre, 35 5150 FLOREFFE";
  const myExperienceTitle = "Experience :";

  //  Icone à afficher
  const myMailIcone = "<i class='fas fa-envelope'></i>";
  const myLinkedinIcone = "<i class='fab fa-linkedin'></i>";
  const myAdressIcone = "<i class='fas fa-globe'></i>";
  const myExperienceListItem = ["O'clock : 2018 - 2019", "BeCode"];

  // Variable de stockage des infirmation pour la convertion des constantes en tableau
  let myNameArray;
  let myContactArray;
  let myLinkedinContactArray;
  let myAdressArray;
  let myExperienceTitleArray;
  let myExperienceListItemArray;

  let count;
  let index;

  let skillsArrayIcones = [
    "My Skills",
    "<i class='fab fa-php'></i>",
    "<i class='fab fa-css3-alt'></i>",
    "<i class='fab fa-html5'></i>",
    "<i class='fab fa-js'></i>",
    "<i class='fab fa-sass'></i>",
    "<i class='fab fa-wordpress'></i>",
    "and more...",
    "<button class='main__section__container__list__item__button button-button-02' id='showWhoIAm'>Who I am</button>",
  ];

  skillsButton.addEventListener("click", () => {
    count = 0;

    getDomElementTitle.remove();
    getDomElementSubtitle.remove();
    //changeTitle(skillsArray);
    skillsButton.remove();
    showSkills();
  });

  // Génération d'un nombre aléatoire pour l'écriture du texte
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Modifie le titre
  function changeTitle() {
    getDomElementTitle.innerHTML += skillsArray[count];
    count++;
    skillsButton.remove();
    if (count <= skillsArray.length) {
      setTimeout(changeTitle, getRandomArbitrary(100, 300));
    } else {
      showSkills();
      getDomElementTitle.remove();
    }
  }

  // Affiche la liste des skills
  index = 0;
  11;
  let ul = getDomElement.appendChild(document.createElement("ul"));
  async function showSkills() {
    let li = ul.appendChild(document.createElement("li"));
    ul.className = "main__section__container__list";
    li.className = "main__section__container__list__item";
    li.innerHTML += skillsArrayIcones[index];

    if (index < skillsArrayIcones.length - 1) {
      index++;
      showSkills();
      //   setTimeout(showSkills, 1000);
    } else {
      let getLiList = document.querySelectorAll(
        ".main__section__container__list__item"
      );
      let lastLi = getLiList.length - 1;
      let getButton = getLiList[lastLi];
      getButton.className += " button-container";
      const result = await resolveAfterShowSkills();
    }
  }

  // Afficher mes informations
  function resolveAfterShowSkills() {
    return new Promise((resolve) => {
      let showWhoIAmButton = document.querySelector("#showWhoIAm");
      showWhoIAmButton.addEventListener("click", () => {
        showWhoIAm();
      });
    });
  }

  function showWhoIAm() {
    let ul = document.querySelector(".main__section__container__list");
    let buttonContainer = document.querySelector(
      ".main__section__container__button-containt"
    );

    ul.remove();
    buttonContainer.remove();
    whoIAmContent();
  }

  async function whoIAmContent() {
    let creatDiv = getDomElement.appendChild(document.createElement("div"));
    creatDiv.className = "main__section__container__content-box";
    // !
    // !!
    // !!! LISTE DES DIFFERENTES ETAPES PAR POINTS !!!
    // !!
    // !
    // 0.1. Création dans lE DOM des différents éléments

    let creatContent = creatDiv.appendChild(document.createElement("div"));
    // Ecriture du titre
    creatContent.className = "main__section__container__content-box__window";
    let myNameContent = creatContent.appendChild(document.createElement("h1"));
    myNameContent.className =
      "main__section__container__content-box__window__title";
    // Ecriture de l'adresse email
    let myContactContent = creatContent.appendChild(
      document.createElement("a")
    );
    myContactContent.className =
      "main__section__container__content-box__window__sub-title";
    myContactContent.href = "mailto:" + myContact;

    // Ecriture de l'adresse linkedin
    let myContactContentLinkdin = creatContent.appendChild(
      document.createElement("a")
    );
    myContactContentLinkdin.href = myLinkedinContact;
    myContactContentLinkdin.className =
      "main__section__container__content-box__window__sub-title sub-title-linkdin";

    // Ecriture de l'adresse postale
    let myContactContentPostAdress = creatContent.appendChild(
      document.createElement("a")
    );
    myContactContentPostAdress.href = myAdress;
    myContactContentPostAdress.className =
      "main__section__container__content-box__window__sub-title sub-title-adress";

    // Ecriture de l'expérience - Titre

    let myExperience = creatContent.appendChild(document.createElement("h2"));

    myExperience.className =
      "main__section__container__content-box__window__sub-title sub-title-experience";

    // Ecriture de l'expérience - LISTE UL

    let myExperienceListe = creatContent.appendChild(
      document.createElement("ul")
    );

    myExperienceListe.className =
      "main__section__container__content-box__window__sub-title sub-title-experience-liste";

    // Ecriture de l'expérience - LISTE LI
    //DEBUT
    let myExperienceListeItem = myExperienceListe.appendChild(
      document.createElement("li")
    );

    myExperienceListeItem.className =
      "main__section__container__content-box__window__sub-title sub-title-experience-liste-item";

    //FIN

    // LANCEMENT DE LA FONCTION ASYNCHRONE - SUITE
    const whoIAmContentResult = await resolveAfterWhoIAmContent();
  }

  function resolveAfterWhoIAmContent() {
    return new Promise((resolve) => {
      count = 0;

      // 0.2. Modification des const en tableau

      myNameArray = myName.split("");

      myLinkedinContactArray = myLinkedinContact.split("");
      writeTheTitle(myNameArray);
    });
  }

  // 0.3. Affiche les informations de whoIAmContent

  function writeTheTitle() {
    let getMyNameContent = document.querySelector(
      ".main__section__container__content-box__window__title"
    );
    getMyNameContent.innerHTML += myNameArray[count];
    count++;

    if (count < myNameArray.length) {
      setTimeout(writeTheTitle, getRandomArbitrary(50, 100));
    } else {
      // EMAIL
      // 0.3.3 Selection de la constante
      myContactArray = myContact.split("");
      // 0.4. Selection dans le DOM des emplacements à modifier

      let getMyContactContent = document.querySelector(
        ".main__section__container__content-box__window__sub-title"
      );

      // 0.5. Affichage de l'icone

      getMyContactContent.innerHTML = myMailIcone;

      // LINKEDIN
      // 0.3.3 Selection de la constante
      myLinkedinContactArray = myLinkedinContact.split("");
      // 0.4. Selection dans le DOM des emplacements à modifier
      let getMyLinkedinContactContent = document.querySelector(
        ".sub-title-linkdin"
      );
      // 0.5. Affichage de l'icone
      getMyLinkedinContactContent.innerHTML = myLinkedinIcone;

      // ADRESS
      // 0.3.3 Selection de la constante
      myAdressArray = myAdress.split("");
      // 0.4. Selection dans le DOM des emplacements à modifier
      let getMyAdressContactContent = document.querySelector(
        ".sub-title-adress"
      );
      // 0.5. Affichage de l'icone
      getMyAdressContactContent.innerHTML = myAdressIcone;

      // EXPERIENCE - TITRE
      // 0.3.3 Selection de la constante
      myExperienceTitleArray = myExperienceTitle.split("");
      // 0.4. Selection dans le DOM des emplacements à modifier
      let getMyExperienceContactContent = document.querySelector(
        ".sub-title-experience"
      );
      // 0.5. Affichage de l'icone
      // - pas d'icone -

      // EXPERIENCE - LISTE - ITEMS
      console.log(myExperienceListItem);

      // LANCEMENT DE LA FONCTION

      writeTheContactInfo(myContactArray, getMyContactContent);
      writeTheContactInfo(myLinkedinContactArray, getMyLinkedinContactContent);
      writeTheContactInfo(myAdressArray, getMyAdressContactContent);
      writeTheContactInfo(
        myExperienceTitleArray,
        getMyExperienceContactContent
      );
      // writeTheContactInfo(
      //   myExperienceListItemArray,
      //   getMyExperienceListItemContent
      // );

      //0.5. Ecriture des informations de contact

      function writeTheContactInfo(myContactArray, getMyContactContent) {
        var writeTheContactInfoCount = 0;
        dynamicText();
        function dynamicText() {
          getMyContactContent.innerHTML +=
            myContactArray[writeTheContactInfoCount];
          writeTheContactInfoCount++;

          if (writeTheContactInfoCount < myContactArray.length) {
            setTimeout(dynamicText, getRandomArbitrary(50, 100));
          } else {
            console.log("Termine");
          }
        }
      }
    }
  }
})();
