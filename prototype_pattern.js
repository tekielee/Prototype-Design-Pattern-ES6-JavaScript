class Shape {
	constructor() {
		this.id;
		this.type;
	}
	
	getType() {
		return this.type;
	}
	
	getId() {
		return this.id;
	}
	
	setId(id) {
		this.id = id;
	}
	
	draw() {}
}

class Rectangle extends Shape {
	constructor() {
		super();
		this.type = 'Rectangle';
	}
	
	draw() {
		console.log('Inside Rectangle::draw() method.')
	}
}

class Square extends Shape {
	constructor() {
		super();
		this.type = 'Square';
	}
	
	draw() {
		console.log('Inside Square::draw() method.')
	}
}

class Circle extends Shape {
	constructor() {
		super();
		this.type = 'Circle';
	}
	
	draw() {
		console.log('Inside Circle::draw() method.')
	}
}

class ShapeCache {
	constructor() {
		this.shapeMap = {};
	}
	
	getShape(shapeId) {
		const shapeCache = this.shapeMap[shapeId];
		return Object.assign({}, shapeCache);
	}
	
	loadCache() {
		const circle = new Circle();
		circle.setId(1);
		this.shapeMap[circle.getId()] = circle;
		
		const square = new Square();
		square.setId(2);
		this.shapeMap[square.getId()] = square;
		
		const rectangle = new Rectangle();
		rectangle.setId(3);
		this.shapeMap[rectangle.getId()] = rectangle;
	}
}

const shapeCache = new ShapeCache();
shapeCache.loadCache();

const clonedShape = shapeCache.getShape(1);
console.log('Shape : ' + clonedShape.type);
const clonedShape2 = shapeCache.getShape(2);
console.log('Shape : ' + clonedShape2.type);
const clonedShape3 = shapeCache.getShape(3);
console.log('Shape : ' + clonedShape3.type);
