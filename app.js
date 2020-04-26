(() => {
  // Gestion de l'affichage des SKILLS via le click

  let getDomElement = document.querySelector(".main__section__container");
  let skillsButton = document.getElementById("showMySkills");
  let getDomElementTitle = getDomElement.children[0];
  let getDomElementSubtitle = getDomElement.children[1];
  let skillsArray = ["M", "y", " ", "S", "k", "i", "l", "l", "s", " "];
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
    // getDomElementTitle.innerHTML = " ";
    // getDomElementSubtitle.innerHTML = " ";
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
    console.log("ici");
    let ul = document.querySelector(".main__section__container__list");
    let buttonContainer = document.querySelector(
      ".main__section__container__button-containt"
    );
    console.log(ul);
    ul.remove();
    buttonContainer.remove();
  }
})();
