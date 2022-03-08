describe('async', () => {
  let characterService;

  beforeEach(() => {
    characterService = new CharacterService();
  });

  describe('getAllCharacters', () => {
    it('should get all characters correctly', done => {
      characterService.getAllCharacters().then(characters => {
        expect(characters.length).toEqual(4);
        done();
      }).catch(error => done());
    });
  });

  describe('getCharacter', () => {
    it('should get Darth Vader correctly', done => {
      characterService.getCharacter(2).then(character => {
        expect(character.name).toEqual('Darth Vader');
        done();
      }).catch(error => done());
    });
    it('should get Rey correctly', done => {
      characterService.getCharacter(1).then(character => {
        expect(character.name).toEqual('Rey');
        done();
      }).catch(error => done());
    });
  });

  describe('getCharactersByType', () => {
    it('should get Jedi characters correctly', done => {
      characterService.getCharactersByType('Jedi').then(characters => {
        expect(characters.length).toEqual(3);
        expect(
          characters.find(character => character.name == 'Han Solo')
        ).toBeFalsy();
        done();
      }).catch(error => done());
    });
    it('should get Human characters correctly', done => {
      characterService.getCharactersByType('Human').then(characters => {
        expect(characters.length).toEqual(1);
        expect(
          characters.find(character => character.name == 'Han Solo')
        ).toBeTruthy();
        done();
      }).catch(error => done());
    });
  });
});
