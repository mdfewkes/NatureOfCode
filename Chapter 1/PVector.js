class PVector {
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}

	add(vector) {
		this.x += vector.x;
		this.y += vector.y;
	}

	subtract(vector) {
		this.x -= vector.x;
		this.y -= vector.y;
	}

	scale(value) {
		this.x *= value;
		this.y *= value;
	}

	magnitude() {
		return Mth.sqrt(this.x*this.x + this.y*this.y);
	}

	normalize() {
		var mag = this.magnitude();
		this.x = this.x / mag;
	}

	setMagnitude(newMag) {
		this.normalize();
		this.scale(newMag);
	}

	limit(maxMag) {
		if (this.magnitude() > maxMag) {
			this.setMagnitude(maxMag);
		}
	}
}