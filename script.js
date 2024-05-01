class Circle {
    constructor(radius, colour) {
      this.radius = radius;
      this.colour = colour;
    }
    
    getradius() {
      return this.radius;
    }
    
    setradius(rad) {
      this.radius = rad;
      return this.radius;
    }
    
    getcolour() {
      return this.colour;
    }
    
    setcolour(clr) {
      this.colour = clr;
      return this.colour;
    }
    
    getarea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
    
    getcircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  var c1 = new Circle(1.0, "red");
  console.log(c1.getradius());
  console.log(c1.getcolour());
  console.log(c1.setradius(1.0))
  console.log(c1.setcolour("blue"));
  console.log(c1.getarea());
  console.log(c1.getcircumference());