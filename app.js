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
        //=============== Definimos las secciones ===========================================

        this.secciones = {
            "Entrada y pasillo": [
                { nombre: "Mesa entrada o taquillón", precioMedio: 100, precioESECO:0 },
                { nombre: "Perchero y paragüero", precioMedio: 100 },
                { nombre: "Lampara", precioMedio: 100 },
                { nombre: "Espejo", precioMedio: 100 },
                { nombre: "Cuadros", precioMedio: 150 },
                { nombre: "Felpudo", precioMedio: 15 }
            ],
            "Salón": [
                { nombre: "Cortinas", precioMedio: 500 },
                { nombre: "Sofá de tres plazas", precioMedio: 1000 },
                { nombre: "Sofá de dos plazas", precioMedio: 800 },
                { nombre: "Mesa de centro", precioMedio: 300 },
                { nombre: "Mueble aparador", precioMedio: 1000 },
                { nombre: "Alfombras", precioMedio: 500 },
                { nombre: "Televisión", precioMedio: 450 },
                { nombre: "Video/reproductor DVD", precioMedio: 100 },
                { nombre: "Blue-R", precioMedio: 100 },
                { nombre: "Cámara video-DVD", precioMedio: 200 },
                { nombre: "Reproductor Blu Ray", precioMedio: 100 },
                { nombre: "Cámara de fotografías", precioMedio: 300 },
                { nombre: "Ordenador y pantalla", precioMedio: 400 },
                { nombre: "Impresora", precioMedio: 100 },
                { nombre: "Video consola", precioMedio: 200 },
                { nombre: "Libros", precioMedio: 150 },
                { nombre: "CD, DVD´s y videojuegos", precioMedio: 250 },
                { nombre: "Mantelerías", precioMedio: 150 },
                { nombre: "Cuberterías", precioMedio: 300 },
                { nombre: "Cristaleria fina", precioMedio: 300 },
                { nombre: "Mesa de comedor", precioMedio: 300 },
                { nombre: "Sillas de comedor", precioMedio: 350 },
                { nombre: "Cuadros", precioMedio: 350 },
                { nombre: "Radiador electrico", precioMedio: 50 },
                { nombre: "Lamparas de techo", precioMedio: 150 },
                { nombre: "Lamparas de mesa", precioMedio: 60 },
                { nombre: "Adornos", precioMedio: 150 }
            ],
            "Cocina": [
                { nombre: "Mobiliario cocina", precioMedio: 3000 },
                { nombre: "Frigorifico", precioMedio: 600 },
                { nombre: "Arcón congelador", precioMedio: 300 },
                { nombre: "Lavavajillas", precioMedio: 250 },
                { nombre: "Horno", precioMedio: 200 },
                { nombre: "Placa gas / vitro", precioMedio: 200 },
                { nombre: "Microondas", precioMedio: 90 },
                { nombre: "Campana extractora", precioMedio: 150 },
                { nombre: "Termomix", precioMedio: 900 },
                { nombre: "Cafetera", precioMedio: 20 },
                { nombre: "Tostador", precioMedio: 20 },
                { nombre: "Batidora", precioMedio: 20 },
                { nombre: "Freidora", precioMedio: 80 },
                { nombre: "Aspiradora", precioMedio: 150 },
                { nombre: "Vaporetta", precioMedio: 200 },
                { nombre: "Lavadora", precioMedio: 300 },
                { nombre: "Secadora", precioMedio: 300 },
                { nombre: "Plancha y tabla", precioMedio: 40 },
                { nombre: "Centro de planchado", precioMedio: 400 },
                { nombre: "Cubiertería diaria", precioMedio: 60 },
                { nombre: "Cristalería diaria", precioMedio: 60 },
                { nombre: "Mantelería diaria", precioMedio: 40 },
                { nombre: "Menaje cocina (sartenes, ollas, cacerolas, cuchillos, rasera, etc)", precioMedio: 200 },
                { nombre: "Cortinas", precioMedio: 100 },
                { nombre: "Mesa y sillas", precioMedio: 200 },
                { nombre: "Televisión", precioMedio: 150 },
                { nombre: "Vinoteca", precioMedio: 150 },
                { nombre: "Apliques de iluminación", precioMedio: 50 },
                { nombre: "Cuadros", precioMedio: 60 },
                { nombre: "Adornos", precioMedio: 50 },
                { nombre: "Herramientas", precioMedio: 60 },
                { nombre: "Articulos de limpieza (fregona, cepillo, amoniaco, lejia …)", precioMedio: 50 }
            ],
            "Dormitorio principal": [
                { nombre: "Cabecero cama", precioMedio: 400 },
                { nombre: "Cama (somier/canape)", precioMedio: 500 },
                { nombre: "Colchón", precioMedio: 500 },
                { nombre: "Mesitas", precioMedio: 500 },
                { nombre: "Armario", precioMedio: 1200 },
                { nombre: "Ropa de cama (almohada, sabanas, mantas, edredones)", precioMedio: 300 },
                { nombre: "Cortinas", precioMedio: 200 },
                { nombre: "Lampara de techo", precioMedio: 150 },
                { nombre: "Lampara de mesa", precioMedio: 120 },
                { nombre: "Mesa y silla", precioMedio: 200 },
                { nombre: "Televisión", precioMedio: 250 },
                { nombre: "Libros", precioMedio: 200 },
                { nombre: "Cuadros", precioMedio: 200 },
                { nombre: "Adornos", precioMedio: 200 },
                { nombre: "Articulos deportivos", precioMedio: 200 }
            ],
            "Dormitorios accesorios": [
                { nombre: "Mesita", precioMedio: 150 },
                { nombre: "Armario", precioMedio: 500 },
                { nombre: "Cortinas", precioMedio: 200 },
                { nombre: "Lampara de techo", precioMedio: 100 },
                { nombre: "Lampara de mesa", precioMedio: 100 },
                { nombre: "Mesa, silla, estanterías", precioMedio: 400 },
                { nombre: "Televisión", precioMedio: 200 },
                { nombre: "Equipo musical", precioMedio: 100 },
                { nombre: "Libros", precioMedio: 200 },
                { nombre: "Cuadros", precioMedio: 200 },
                { nombre: "Adornos", precioMedio: 100 },
                { nombre: "Articulos deportivos", precioMedio: 200 },
                { nombre: "Juegos", precioMedio: 200 }
            ],
            "Baño": [
                { nombre: "Toallas", precioMedio: 100 },
                { nombre: "Apliques de baño", precioMedio: 150 },
                { nombre: "Espejo e iluminiación", precioMedio: 150 },
                { nombre: "Cortinas", precioMedio: 30 },
                { nombre: "Báscula", precioMedio: 20 },
                { nombre: "Mueble", precioMedio: 150 },
                { nombre: "Secador de pelo", precioMedio: 20 }
            ],
            "Por persona mayor de 12 años": [
                { nombre: "Cabecero cama", precioMedio: 150 },
                { nombre: "Cama (somier/canape)", precioMedio: 250 },
                { nombre: "Colchón", precioMedio: 400 },
                { nombre: "Ropa de cama (almohada, sabanas, mantas, edredones)", precioMedio: 300 },
                { nombre: "Prendas de vestir (verano/invierno) Valor Real", precioMedio: 1250 },
                { nombre: "Zapatos", precioMedio: 250 },
                { nombre: "Complementos (gafas, bolsos, cinturones, relojes, )", precioMedio: 600 },
                { nombre: "Ordenador portatil", precioMedio: 300 },
                { nombre: "Impresora", precioMedio: 100 },
                { nombre: "Tablet", precioMedio: 150 },
                { nombre: "Telefonía movil", precioMedio: 200 },
                { nombre: "Videoconsola", precioMedio: 200 },
                { nombre: "Aseo personal (perfumes, gel, champu, afeitado/depilación, dentrificos, etc)", precioMedio: 100 },
                { nombre: "Vinos", precioMedio: 50 },
                { nombre: "Bebidas y comestibles", precioMedio: 40 }
            ],
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

        };

    }


    calcularValorContenido() {
        console.clear();
        // Factor por el cual multiplicar los precios medios
        const factorMultiplicador = this.hashMap.get(this.EntornoSocioEconomico);
        let cuenta = 0;
        let cuentaSec = 0;

        // Iterar sobre las secciones
        Object.keys(this.secciones).forEach(seccion => {
            cuentaSec++;
            console.log("********************************************************\n")
            console.log(`${cuentaSec+". "}`.blue+`${seccion}`);
            cuenta = 0; // cuando cambia de seccion se reinicia la cuenta 

            // Iterar sobre los elementos de cada sección y actualizar el precioMedio
            this.secciones[seccion].forEach(elemento => {
                cuenta++;
                elemento.precioESECO = elemento.precioMedio * factorMultiplicador;
                console.log(`${cuenta}`.green + `. Nombre: `.white + `${elemento.nombre}`.yellow +
                    `, Precio Medio: `.white + `${elemento.precioMedio}`.green
                    + `, Precio para ESECO= ${this.EntornoSocioEconomico }`+": " +`${elemento.precioESECO}`.cyan);

            });
        });



    }

    añadirNuevosElementosSeccExistente(Seccion, elementoN, precio) {

        if (this.secciones.hasOwnProperty(Seccion)) {
            //  Construir el nuevo elemento con nombre y precio
            const nuevoElemento = { "nombre": elementoN, "precioMedio": precio };
            // añadir el elemento a la seccion:
            this.secciones[Seccion].push(nuevoElemento);
        } else {
            console.error(`La sección "${Seccion}" no existe.`);
        }
    
    }

    añadirNuevaSeccion() {
        
    }

}



// Crear una instancia de Preexistencias fuera de la clase
let misPreexistencias = new Preexistencias();

// Llamar al método calcularValorContenido
misPreexistencias.añadirNuevosElementosSeccExistente("Por persona menor de 12 años", "teclado", 17)

misPreexistencias.calcularValorContenido();


