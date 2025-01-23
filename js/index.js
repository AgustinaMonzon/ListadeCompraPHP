// Cargar productos al inicio
leer();

document.querySelector(".compra").addEventListener('click', guardar); // Añadir producto
document.querySelector(".vaciar").addEventListener('click', limpiar); // Vaciar lista
document.querySelector("#producto").addEventListener('keydown', teclado); // Manejar tecla Enter


function teclado(e) {
    if (e.key === 'Enter') {
        guardar(); // Guardar producto al presionar Enter
    }
}


function limpiar() {
    fetch("php/vaciar.php") // Llamar al archivo PHP para vaciar la lista
        .then(respuesta => respuesta.text())
        .then(mostrar); // Mostrar lista actualizada
}


function vaciar() {
    document.querySelector("#producto").value = ""; // Limpia el campo
    document.querySelector("#producto").focus(); // Enfoca el campo
}


function guardar() {
    const escrito = document.querySelector("#producto").value.trim(); // Obtener valor
    if (escrito) {
        const dato = { aGuardar: escrito }; // Preparar dato para guardar
        fetch('php/insertar.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dato) // Enviar dato como JSON
        })
        .then(u => u.text())
        .then(o => leer()); // Leer lista después de guardar
    }
}


function leer() {
    fetch("php/leer.php")
        .then(datos => {
            if (!datos.ok) {
                throw new Error('Network response was not ok'); 
            }
            return datos.json(); // Convertir a JSON
        })
        .then(resultado => {
            console.log('Resultado de leer.php:', resultado); 
            mostrar(resultado); // Mostrar resultado
        })
        .catch(error => console.error('Error:', error)); 
}


function mostrar(resultado) {
    document.querySelector(".caja").innerHTML = ""; // Limpiar contenedor

    // Verificar si resultado es un array
    if (Array.isArray(resultado)) {
        resultado.forEach(valor => {
            if (valor.productos.trim() !== '') { // Ignorar productos vacíos
                // Insertar producto con botón de eliminación
                document.querySelector(".caja").insertAdjacentHTML(
                    "beforeend", 
                    `<div>${valor.productos.replace(/^"(.+)"$/, '$1')} <button class="delete-button">X</button></div>`
                );
            }
        });
    } else {
        console.warn('Resultado no es un array:', resultado); 

    }

    vaciar(); 
    agregarEventosEliminar(); 
}


function agregarEventosEliminar() {
    const botonesEliminar = document.querySelectorAll(".delete-button");
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', function() {
            const producto = this.parentElement.textContent.replace(' X', ''); 
            eliminarProducto(producto); 
        });
    });
}


function eliminarProducto(producto) {
    const dato = { aEliminar: producto }; 
    fetch('php/eliminar.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dato) 
    })
    .then(res => res.text())
    .then(() => leer()) 
    .catch(error => console.error('Error:', error));
}