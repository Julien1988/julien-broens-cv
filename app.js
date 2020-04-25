(() => {
  // Gestion de l'affichage des SKILLS via le click

  let getDomElement = document.querySelector(".main__section__container");
  let skillsButton = document.getElementById("showMySkills");
  let getDomElementTitle = getDomElement.children[0];
  let getDomElementSubtitle = getDomElement.children[1];
  let skillsArray = ["M", "y", " ", "S", "k", "i", "l", "l", "s"];
  let count;

  let skillsArrayIcones = [
    "<i class='fab fa-php'></i>",
    "<i class='fab fa-css3-alt'></i>",
    "<i class='fab fa-html5'></i>",
    "<i class='fab fa-js'></i>",
    "<i class='fab fa-sass'></i>",
    "<i class='fab fa-wordpress'></i>",
    "and more...",
  ];

  skillsButton.addEventListener("click", () => {
    count = 0;
    getDomElementTitle.innerHTML = " ";
    getDomElementSubtitle.innerHTML = " ";
    changeTitle(skillsArray);
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
    if (count < skillsArray.length) {
      setTimeout(changeTitle, getRandomArbitrary(100, 300));
    }
  }

  // Affiche la liste des skills
  function showSkills() {
    skillsButton.remove();
    let ul = getDomElement.appendChild(document.createElement("ul"));
    ul.className = "main__section__container__list";

    for (let i = 0; i < skillsArrayIcones.length; i++) {
      let li = ul.appendChild(document.createElement("li"));
      li.className = "main__section__container__list__item";
      li.innerHTML = skillsArrayIcones[i];
    }

    // let li = ul.appendChild(document.createElement("li"));
    // li.className = "main__section__container__list__item";
  }
})();

{
  /* <section class="main__section section section-top">
<h1 class="main__section__title">My Skills</h1>
<div class="main__section__container">
  <ul class="main__section__container__list">
    <li class="main__section__container__list__item">
      <i class="fab fa-php"></i>
    </li>
    <li class="main__section__container__list__item">
      <i class="fab fa-css3-alt"></i>
    </li>
    <li class="main__section__container__list__item">
      <i class="fab fa-html5"></i>
    </li>
    <li class="main__section__container__list__item">
      <i class="fab fa-js"></i>
    </li>
    <li class="main__section__container__list__item">
      <i class="fab fa-sass"></i>
    </li>
    <li class="main__section__container__list__item">
      <i class="fab fa-wordpress"></i>
    </li>
    <li class="main__section__container__list__item">
      and more...
    </li>
  </ul>
</div>
</section> */
}
