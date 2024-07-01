const colors = require('colors');

class Preexistencias {
    constructor() {
        // Definir valores de entrada:
        this.TipoVivienda = ""; // Habitual || Secundaria
        this.numPersonasQueHabitan = 0;
        this.numNinosMenores12 = 0;
        this.numDormitorios = 0;
        this.EntornoSocioEconomico = "muy alto";
        this.valorTotalContenido = 0;

        // Definir entorno socioeconómico:
        this.hashMap = new Map();
        this.hashMap.set("muy alto", 2);
        this.hashMap.set("alto", 1.5);
        this.hashMap.set("medio", 1);
        this.hashMap.set("sencillo", 0.65);
        this.hashMap.set("básico", 0.5);
        this.hashMap.set("basico", 0.5);

        // Definimos las secciones
        this.secciones = {
            "Entrada y pasillo": [
                { nombre: "Mesa entrada o taquillón", precioMedio: 100, precioESECO: 0 },
                { nombre: "Perchero y paragüero", precioMedio: 100 },
                { nombre: "Lampara", precioMedio: 100 },
                { nombre: "Espejo", precioMedio: 100 },
                { nombre: "Cuadros", precioMedio: 150 },
                { nombre: "Felpudo", precioMedio: 15 }
            ],
            "Salón": [
                { nombre: "Cortinas", precioMedio: 500 },
                { nombre: "Sofá de tres plazas", precioMedio: 1000 },
                // Otros elementos del salón...
            ],
            // Otras secciones...
            "Por persona menor de 12 años": [
                { nombre: "Cabecero cama", precioMedio: 150 },
                { nombre: "Cama (somier/canape)", precioMedio: 250 },
                { nombre: "Colchón", precioMedio: 400 },
                { nombre: "Ropa de cama (almohada, sabanas, mantas, edredones)", precioMedio: 300 },
                { nombre: "Prendas de vestir (verano/invierno) Valor Real", precioMedio: 450 },
                { nombre: "Zapatos", precioMedio: 100 },
                { nombre: "Complementos (gafas, bolsos, cinturones, relojes, )", precioMedio: 100 },
                { nombre: "Aseo personal (perfumes, gel, champu, afeitado/depilación, dentrificos, etc)", precioMedio: 50 },
                { nombre: "Bebidas y comestibles", precioMedio: 20 }
            ],
            // Más secciones...
        };
    }

    calcularValorContenido() {
        console.clear();
        // Factor por el cual multiplicar los precios medios
        const factorMultiplicador = this.hashMap.get(this.EntornoSocioEconomico);

        // Iterar sobre las secciones
        Object.keys(this.secciones).forEach(seccion => {
            console.log("********************************************************\n");
            console.log(`Sección: ${seccion}`);

            // Iterar sobre los elementos de cada sección y actualizar el precioMedio
            this.secciones[seccion].forEach((elemento, index) => {
                elemento.precioESECO = elemento.precioMedio * factorMultiplicador;
                console.log(`${index + 1}`.green + `. Nombre: `.white + `${elemento.nombre}`.yellow +
                    `, Precio Medio: `.white + `${elemento.precioMedio}`.green +
                    `, Precio para ESECO (${this.EntornoSocioEconomico}): `.white + `${elemento.precioESECO}`.cyan);
            });
        });
    }

    añadirNuevosElementosSeccExistente(Seccion, elementoN, precio) {
        if (this.secciones.hasOwnProperty(Seccion)) {
            // Construir el nuevo elemento con nombre y precio
            const nuevoElemento = { "nombre": elementoN, "precioMedio": precio };
            // Añadir el elemento a la sección
            this.secciones[Seccion].push(nuevoElemento);
        } else {
            console.error(`La sección "${Seccion}" no existe.`);
        }
    }

    añadirNuevaSeccion() {
        // Implementa la lógica para añadir una nueva sección si fuera necesario
    }
}

// Crear una instancia de Preexistencias fuera de la clase
let misPreexistencias = new Preexistencias();

// Llamar al método para añadir un nuevo elemento a la sección existente "Por persona menor de 12 años"
misPreexistencias.añadirNuevosElementosSeccExistente("Por persona menor de 12 años", "calcetines", 99);

// Llamar al método para calcular el valor del contenido con el nuevo elemento añadido
misPreexistencias.calcularValorContenido();
