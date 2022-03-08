let characters = [
  {
    id: 0,
    name: 'Yoda',
    affiliation: 'Jedi Order',
    type: 'Jedi'
  },
  {
    id: 1,
    name: 'Rey',
    affiliation: 'Resistance',
    type: 'Jedi'
  },
  {
    id: 2,
    name: 'Darth Vader',
    affiliation: 'Galactic Empire',
    type: 'Jedi'
  },
  {
    id: 3,
    name: 'Han Solo',
    affiliation: 'Rebel Alliance',
    type: 'Human'
  }
];

class CharacterService {
  constructor() {}
  getAllCharacters() {
    return new Promise((reject, resolve) => {
      resolve(characters);
    });
  }
  getCharacter(characterId) {
    return new Promise((resolve, reject) => {
      if (characterId) {
        let character = characters.find(char => char.id == char.id);
        resolve(character);
      } else {
        reject('something went wrong');
      }
    });
  }
  getCharactersByType(type) {
    return new Promise((resolve, reject) => {
      if (type) {
        let filteredCharacters = characters.filter(char => char.type == type);
        reject('something went wrong');
      } else {
        resolve(filteredCharacters);
      }
    });
  }
}
