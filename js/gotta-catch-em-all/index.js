/*
  1. W pliku data.js pod zmienna "pokemons" znajduje się tablica zawierająca dane wielu pokemonów, masz do niej dostęp również w tym pliku. 
  Chciałbym, abyś użył jej do wyświetlenia wszystkich pokemonów w naszym Pokedexie. 
  W tym celu dla każdego z nich możesz stworzyć nowy element drzeewa DOM i umieścić w nim informacje o Pokemonie (możesz zawrzeć tam jego nazwę, zdjęcie, a na kontener w którym się znajduje nadać specjalną klasę zależnie od typu)
*/

// tutaj złapiemy sekcję, do której będziemy dodawać pokemony
const pokemonsContainer = document.querySelector(".pokemons");
const filterInfoText = document.querySelector(".filterInfoText");

function renderPokemons(pokemons) {
  // uzupełnij tutaj
  pokemonsContainer.innerHTML = '';
  filterInfoText.innerText = "Result: "+pokemons.length;

  if (pokemons.length != 0) {
    for (i=0; i<pokemons.length; i++) {
      const poks = document.createElement("div");
      poks.classList.add("poks");

      const poksName = document.createElement("p");
      poksName.classList.add("name");
      poksName.innerText = pokemons[i]['name'];

      const poksImgDiv = document.createElement("div");
      const poksImg = document.createElement("img");
      poksImgDiv.classList.add("view");
      poksImg.src = pokemons[i]['image'];
      poksImgDiv.appendChild(poksImg);
      
      const poksTypes = document.createElement("div");
      poksTypes.classList.add("types");

      pokemons[i]['types'].map( (type) => {
        const poksOneType = document.createElement("span");
        poksOneType.innerText = type.toUpperCase();
        poksOneType.classList.add("onetype");
        poksTypes.appendChild(poksOneType);
      })

      const poksUp = document.createElement("div");
      poksUp.classList.add("poksUp");
      poksUp.appendChild(poksTypes);
      poksUp.appendChild(poksImgDiv);

      poks.appendChild(poksUp);
      poks.appendChild(poksName);

      pokemonsContainer.appendChild(poks);
    }
  }
  else {
    pokemonsContainer.innerHTML +=
      "<div id='info'><p>Can't find any pokemon!</p></div>";
  }
}

// następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
renderPokemons(pokemons);

/*
  2. Przeglądanie całej listy pokemonów może okazać się trochę uciążliwe. Fajnie byłoby skorzystać z filtrów, które już znajdują sie w pliku html. 
  Napisz ciało funkcji które pozwoli nam na:
  - filtrowanie po typie
  - filtrowanie po nazwie (wpisany fragment zawiera się w nazwie pokemona)
*/

function filterPokemons(pokemons) {
  // uzupełnij tutaj
  let newPokemons = [];
  let filterType = [];

  const checkMark = document.querySelectorAll('input[type=checkbox]:checked');
  for (i=0; i<checkMark.length; i++) {
    filterType[i] = checkMark[i].id;
  }

  const searchBar = document.querySelector('#pokemon-name');
  const searchString = searchBar.value.toLowerCase();

  // A: sięgam po typ bezpośrednio z tablicy pokemonów na bazie nazwy, dlatego nie nadałam klasy kontenerom

  pokemons.forEach(pokemon => {
    for (i=0; i<filterType.length; i++) {
      if (pokemon.types.includes(filterType[i]) && pokemon.name.toLowerCase().includes(searchString))
        if (!newPokemons.includes(pokemon))
          newPokemons.push(pokemon)
    }
  })

  // zwróć odfiltrowaną tablicę pokemonów
  return newPokemons;
}

const form = document.querySelector("form");

function submitForm(event) {
  event.preventDefault();
  // następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
  renderPokemons(filterPokemons(pokemons));
}

form.addEventListener("submit", submitForm);

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/
