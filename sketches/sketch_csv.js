var data;

function preload() {
   data = loadTable("https://raw.githubusercontent.com/profesorfaco/dno037-2017-07/gh-pages/data/titanic_passengers.csv", "true", "header");
}

function setup() {
   canvas = createCanvas(windowWidth, windowHeight * 0.8);
   canvas.parent('top');
   canvas.position(0, 0);
   canvas.style('z-index', '-1');
   noLoop();
   noStroke();
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight * 0.8);
}

function draw() {
   background(237, 34, 93);
   var total_primera = 0;
   var total_segunda = 0;
   var total_tercera = 0;
   var muertos_primera = 0;
   var muertos_segunda = 0;
   var muertos_tercera = 0;
   //con esto cuento el total de pasajeros por clase
   for (var a = 0; a < data.getRowCount(); a++) {
      if (data.get(a, 2) == 1) {
         total_primera++
      } else if (data.get(a, 2) == 2) {
         total_segunda++
      } else if (data.get(a, 2) == 3) {
         total_tercera++
      }
   }
   //con esto, que incluye una doble condición de muerto y clase, cuento los fallecidos por clase
   for (var b = 0; b < data.getRowCount(); b++) {
      if ((data.get(b, 1) == 0) && (data.get(b, 2) == 3)) {
         muertos_tercera++
      } else if ((data.get(b, 1) == 0) && (data.get(b, 2) == 2)) {
         muertos_segunda++
      } else if ((data.get(b, 1) == 0) && (data.get(b, 2) == 1)) {
         muertos_primera++
      }
}

//con esto voy a contar hombres y mujeres//
var muertos_en_tercera = 0;
var muertos_en_segunda = 0;
var muertos_en_primera = 0;
var muertas_en_tercera = 0;
var muertas_en_segunda = 0;
var muertas_en_primera = 0;


for (var c = 0; c < data.getRowCount(); c++) {
   if ((data.get(c, 1) == 0) && (data.get(c, 5) == "male") && (data.get(c, 2) == 3)) {
      muertos_en_tercera++
   } else if ((data.get(c, 1) == 0) && (data.get(c, 5) == "male") && (data.get(c, 2) == 2)) {
      muertos_en_segunda++
   } else if ((data.get(c, 1) == 0) && (data.get(c, 5) == "male") && (data.get(c, 2) == 1)) {
      muertos_en_primera++
   }
}


for (var d = 0; d < data.getRowCount(); d++) {
   if ((data.get(d, 1) == 0) && (data.get(d, 5) == "female") && (data.get(d, 2) == 3)) {
      muertas_en_tercera++
   } else if ((data.get(d, 1) == 0) && (data.get(d, 5) == "female") && (data.get(d, 2) == 2)) {
      muertas_en_segunda++
   } else if ((data.get(d, 1) == 0) && (data.get(d, 5) == "female") && (data.get(d, 2) == 1)) {
      muertas_en_primera++
   }
}



print("Murieron "+muertos_en_tercera+" hombres en tercera clase");
print("Murieron "+muertos_en_segunda+" hombres en segunda clase");
print("Murieron "+muertos_en_primera+" hombres en primera clase");

print("Murieron "+muertas_en_tercera+" mujeres en tercera clase");
print("Murieron "+muertas_en_segunda+" mujeres en segunda clase");
print("Murieron "+muertas_en_primera+" mujeres en primera clase");

   //todo esto se imprime en su consola de JavaScript
   print("En el Titanic viajaban " + data.getRowCount() + " pasajeros.")
   print("Eran " + total_primera + " pasajeros los que viajaban en la primera clase, de ellos fallecieron " + muertos_primera + ".");
   print("Eran " + total_segunda + " pasajeros los que viajaban en la segunda clase, de ellos fallecieron " + muertos_segunda + ".");
   print("Eran " + total_tercera + " pasajeros los que viajaban en la tercera clase, de ellos fallecieron " + muertos_tercera + ".");
   //esto dibuja los círculos blancos, del total de pasajeros.
   fill(255);
   ellipse((width / 4), (height / 2), (total_primera / 3), (total_primera / 3));
   ellipse((width / 4 * 2), (height / 2), (total_segunda / 3), (total_segunda / 3));
   ellipse((width / 4 * 3), (height / 2), (total_tercera / 3), (total_tercera / 3));
   //estos dibuja los círculos negros, de total de facellecidos.
   fill(0);
   ellipse((width / 4), (height / 2), (muertos_primera / 3), (muertos_primera / 3));
   ellipse((width / 4 * 2), (height / 2), (muertos_segunda / 3), (muertos_segunda / 3));
   ellipse((width / 4 * 3), (height / 2), (muertos_tercera / 3), (muertos_tercera / 3));
}
