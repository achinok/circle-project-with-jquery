let circle = document.querySelector(".circle");

class Circle{
   constructor(){
       this.rad = prompt("Please give me the radius");
   }
   getArea(rad) {
       let area = Math.PI * Math.pow(rad, 2);
   }
   updateCircle() {
       let el = document.querySelector("circle");

       let cir = document.createElement("div");
       let cir = document.createElement("div");
       let cir = setAttribute("class", "circle");

       let height = this.radius;
       let width = this.radius;

       cir.style.width = `width: ${width};`;
       cir.style.height = `height: ${height};`;

       el.appendChild(cir);
   }
}

let c = new Circle();
c.getArea();
c.updateCircle();