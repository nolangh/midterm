describe('Computer', () => {
  let computer;

  describe('constructor', () => {
    beforeEach(() => {
      computer = new Computer('make', 'model', '500GB');
    });
    it('should set the value of make to the value of the first parameter of the constructor function', () => {
      expect(computer.make).toEqual('make');
    });
    it('should set the value of model to the value of the second parameter of the constructor function', () => {
      expect(computer.model).toEqual('model');
    });
    it('should set the value of driveCapacity to the value of the second parameter of the constructor function', () => {
      expect(computer.driveCapacity).toEqual('500GB');
    });
    it('should set the value of batteryPercent to 100', () => {
      expect(computer.batteryPercent).toEqual(100);
    });
    it('should set the value of status to false', () => {
      expect(computer.status).toEqual(false);
    });
  });

  describe('getBatteryPercent', () => {
    beforeEach(() => {
      computer = new Computer('make', 'model', '500GB');
    });
    it('should return the string \'100%\' when the value of batteryPercent is 100', () => {
      let expected = '100%';
      computer.batteryPercent = 100;

      let result = computer.getBatteryPercent();
      
      expect(result).toEqual(expected);
    });
    it('should return the string \'50%\' when the value of batteryPercent is 50', () => {
      let expected = '50%';
      computer.batteryPercent = 50;

      let result = computer.getBatteryPercent();
      
      expect(result).toEqual(expected);
    });
  });

  describe('getStatus', () => {
    beforeEach(() => {
      computer = new Computer('make', 'model', '500GB');
    });
    it('should return "OFF" when the value of status is false', () => {
      computer.status = false;
      
      let result = computer.getStatus();

      expect(result).toEqual('OFF');
    });
    it('should return "ON" when the value of status is true', () => {
      computer.status = true;
      
      let result = computer.getStatus();

      expect(result).toEqual('ON');
    });
  });
});
