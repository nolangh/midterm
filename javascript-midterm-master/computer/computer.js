class Computer {
	constructor(make, model, capacity) {
		this.make = make;
		this.model = model;
		this.driveCapacity = capacity;
		batteryPercent: Number;
		status: Boolean;
	}
	get batteryPercent() {
		let result = `${this.batteryPercent}%`;
		return result;
	}
	get status() {
		if (this.status == true) {
			return on;
		} else {
			return off;
		}
	}
}
