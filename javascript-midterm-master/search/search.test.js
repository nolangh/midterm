describe('search', () => {
  const testNameList = ['Bryce','Ron','Sarah','Brett','Steven','Benjamin','Amado','Weldon','Cortez','Gino','Armand','Brock','Dwight','Gilbert','Darryl','Emery','Odell','Delbert','Numbers','Tommy','Edgar','Von','Les','Lane','Donnell','Rudolf','Loyd','Tom','Augustine','Samual','Florentino','Wilbur','Owen','Booker','Dale','Wallace','Vicenta','Edra','Sulema','Darcey','Asia','Katlyn','Natosha','Charlette','Annamae','Isabel','Lakendra','Tomeka','Ta','Sana','Mariam','Lisa','Aura','Mellisa','Yan','Kathyrn','Kylee','Teresia','Launa','Melba','Ruthie','Hellen','Shoshana','Kimberli','Emelia','Melodee'];

  it('should return all names that have a \'b\' character in them when the search term is \'b\'', () => {
    const expected = ['Bryce','Brett','Benjamin','Brock','Gilbert','Delbert','Numbers','Wilbur','Booker','Isabel','Melba','Kimberli'];
    const result = search(testNameList, 'b');
    
    expect(result).toEqual(expected);
  });
  it('should return all names that have a \'b\' character in them when the search term is \'B\'', () => {
    const expected = ['Bryce','Brett','Benjamin','Brock','Gilbert','Delbert','Numbers','Wilbur','Booker','Isabel','Melba','Kimberli'];
    const result = search(testNameList, 'B');
    
    expect(result).toEqual(expected);
  });
  it('should return all names that have a \'do\' in them when the search term is \'do\'', () => {
    const expected = ['Amado','Weldon','Donnell','Rudolf'];
    const result = search(testNameList, 'do');
    
    expect(result).toEqual(expected);
  });
  it('should return all names that have a \'do\' in them when the search term is \'DO\'', () => {
    const expected = ['Amado','Weldon','Donnell','Rudolf'];
    const result = search(testNameList, 'DO');
    
    expect(result).toEqual(expected);
  });
  it('should return all names that have a \'do\' in them when the search term is \'dO\'', () => {
    const expected = ['Amado','Weldon','Donnell','Rudolf'];
    const result = search(testNameList, 'dO');
    
    expect(result).toEqual(expected);
  });
  it('should return names with the same casing as they were in the input array', () => {
    const expected = ['AmAdO', 'wElDoN', 'dOnNeLl'];
    const result = search(expected, 'd');

    expect(result).toEqual(expected);
  });
});