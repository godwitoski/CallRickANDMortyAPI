function getCharacter() {
  fetch("https://rickandmortyapi.com/api/character?page=1")
    .then((response) => response.json())
    .then((json) => {
      const characters = json.results;
      console.log(characters);
      const masterCard = document.querySelector(".card-grid");
      characters.forEach((character) => {
        masterCard.appendChild(createCard(character));
      });
    });
}

getCharacter();

function createCard(character) {
  const { name, status, species, type, gender, origin, image } = character;
  const article = document.createElement("article");
  const charName = document.createElement("h2");
  const charStatus = document.createElement("p");
  const charSpecies = document.createElement("p");
  const charType = document.createElement("p");
  const charGender = document.createElement("p");
  const charOriginName = document.createElement("p");
  const charOriginUrl = document.createElement("a");
  const charImage = document.createElement("img");
  const divText = document.createElement("div");

  charName.innerHTML = name;
  charStatus.innerHTML = status;
  charSpecies.innerHTML = species;
  charType.innerHTML = type ? type : " ------ ";
  charGender.innerHTML = gender;
  charImage.innerHTML = image;

  charStatus.classList.add(status);

  article.appendChild(charImage);
  charImage.setAttribute("src", image);
  article.appendChild(charName);
  divText.appendChild(charStatus);
  divText.appendChild(charSpecies);
  divText.appendChild(charType);
  divText.appendChild(charGender);
  article.appendChild(divText);
  divText.classList.add("divText");
  if (origin.name !== "unknown") {
    charOriginName.innerHTML = origin.name;
    charOriginUrl.innerHTML = origin.url;
    charOriginUrl.setAttribute("href", origin.url);

    article.appendChild(charOriginName);
    article.appendChild(charOriginUrl);
  } else {
    charOriginName.innerHTML = origin.name;
    article.appendChild(charOriginName);
  }

  return article;
}
