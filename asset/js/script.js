import { getZapatillas } from "./peticiones/getZapatillas.js";

/*const enviarDatos = (id, nombre, descripcion, precio, foto, disponible) => {
    const rutaArchivoHTML = "../zapatillas.html";

    fetch(rutaArchivoHTML)
        .then((response) => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el archivo HTML");
            }
            return response.text();
        })
        .then((html) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");

            doc.getElementById("imagePage").src = foto;
            doc.getElementById("imagePage").alt = `Nombre de imagen: ${nombre}`;
            doc.getElementById("namePage").textContent = `Nombre: ${nombre}`;
            doc.getElementById("descriptionPage").textContent = `Descripción: ${descripcion}`;
            doc.getElementById("pricePage").textContent = `Precio: ${precio}`;
            doc.getElementById("availablePage").textContent = `Disponible: ${disponible}`;

            const nuevoHTML = new XMLSerializer().serializeToString(doc);
            document.body.innerHTML = nuevoHTML;
        })
        .catch((error) => console.error(`Error al cargar el archivo HTML: ${error}`));
}*/

const createCards = (zapatillas) => {
    let zapatillasRow = document.getElementById('zapatillasRow');

    console.log(typeof(zapatillas));
    zapatillas.map( (zapatilla) => {
        console.log(zapatilla);
    } )
    //zapatillas.map((zapatilla) => {
     //   console.log(zapatilla);

        /*const { nombre,  precio, foto, disponible } = zapatilla;

        const divCol = document.createElement("div");
        divCol.classList.add("col-xl-3", "col-lg-3", "col-md-3", "col-sm-12", "col-xs-12", "mt-2", "mb-2");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = foto;
        img.alt = `Nombre de imagen: ${nombre}`;

        const divBody = document.createElement("div");
        divBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = `Nombre: ${nombre}`;

        const price = document.createElement("p");
        price.classList.add("card-text");
        price.textContent = `Precio: ${precio}`;

        const availability = document.createElement("p");
        availability.classList.add("card-text");
        availability.textContent = `Disponible: ${disponible}`;

        const btnVer = document.createElement("button");
        btnVer.classList.add("btn", "btn-success");
        btnVer.textContent = "Ver detalles";

        btnVer.addEventListener("click", () => {
            enviarDatos( nombre, precio, foto, disponible);
        });

    
        divCol.appendChild(card);

        divBody.appendChild(title);
        divBody.appendChild(price);
        divBody.appendChild(availability);
        divBody.appendChild(btnVer);

        card.appendChild(img);
        card.appendChild(divBody);

        

        zapatillasRow.appendChild(divCol);
    *///});
}
getZapatillas()
    .then(zapatillas => {
       
    })
    .catch((error) => console.log(`Error al obtener las zapatillas: ${error}`));