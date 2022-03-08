describe('firstDuplicate', () => {
  it('should return 3 for the array [2, 3, 3, 1, 5, 2]', () => {
    var array = [2, 3, 3, 1, 5, 2];
    var result = firstDuplicate(array);
    expect(result).toEqual(3);
  });
  it('should return -1 for the array [2, 4, 3, 5, 1]', () => {
    var array = [2, 4, 3, 5, 1];
    var result = firstDuplicate(array);
    expect(result).toEqual(-1);
  });
  it('should return -1 for the array [1]', () => {
    var array = [1];
    var result = firstDuplicate(array);
    expect(result).toEqual(-1);
  });
  it('should return 2 for the array [2, 2]', () => {
    var array = [2, 2];
    var result = firstDuplicate(array);
    expect(result).toEqual(2);
  });
  it('should return -1 for the array [2, 1]', () => {
    var array = [2, 1];
    var result = firstDuplicate(array);
    expect(result).toEqual(-1);
  });
  it('should return 6 for the array [8, 4, 6, 2, 6, 4, 7, 9, 5, 8]',  () => {
    var array = [8, 4, 6, 2, 6, 4, 7, 9, 5, 8];
    var result = firstDuplicate(array);
    expect(result).toEqual(6);
  });
  it('should return 1 for the array [1, 1, 2, 2, 1]',  () => {
    var array = [1, 1, 2, 2, 1];
    var result = firstDuplicate(array);
    expect(result).toEqual(1);
  });
});