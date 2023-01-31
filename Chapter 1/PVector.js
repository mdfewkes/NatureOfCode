class PVector {
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}

	get() {
		return new PVector(this.x, this.y);
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

	static add(vector1, vector2) {
		return new PVector(vector1.x + vector2.x, vector1.y + vector2.y);
	}

	static subtract(vector1, vector2) {
		return new PVector(vector1.x - vector2.x, vector1.y - vector2.y);
	}

	static multiply(vector, value) {
		return new PVector(vector.x * value, vector.y * value);
	}

	static divide(vector, value) {
		return new PVector(vector.x / value, vector.y / value);
	}

	magnitude() {
		return Math.sqrt(this.x*this.x + this.y*this.y);
	}

	normalize() {
		var mag = this.magnitude();
		if (mag == 0) return;

		this.x = this.x / mag;
		this.y = this.y / mag;
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

	zero() {
		this.x = 0;
		this.y = 0;
	}
}