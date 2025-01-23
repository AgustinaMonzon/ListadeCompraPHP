# 🛒 Lista de Compras

Este es un **proyecto simple** que permite gestionar una lista de compras. Está diseñado como un ejercicio práctico para aprender e implementar conceptos de **PHP**, **MySQL**, y otras tecnologías web.

🚀 **Propósito:**  
Estoy estudiando PHP y, para afianzar mis conocimientos, decidí crear esta pequeña aplicación. Su enfoque es más educativo que funcional, y busca ayudarme a practicar el flujo completo de desarrollo web.

---

## ✨ Funcionalidades

- **Añadir productos**: Permite agregar productos a la lista.  
- **Eliminar productos**: Los productos añadidos pueden ser eliminados fácilmente.  
- **Vaciar la lista**: Borra todos los productos de la lista con un solo clic.  
- **Interfaz sencilla**: Una UI intuitiva y fácil de usar para experimentar con HTML y CSS.  

---

## 🛠️ Tecnologías utilizadas  

- **PHP**: Lógica de servidor y manejo de la base de datos.  
- **MySQL**: Base de datos para almacenar los productos.  
- **HTML/CSS**: Estructura y estilos para la interfaz de usuario.  
- **JavaScript**: Agrega interactividad al cliente, incluyendo manejo de eventos y solicitudes AJAX.  

---

## 📂 Estructura del Proyecto
compra/
├── css/
│ └── estilos.css # Estilos para la interfaz
├── js/
│ └── index.js # Lógica de interacción en el cliente
├── php/
│ ├── datosConexion.php # Configuración de la base de datos
│ ├── insertar.php # Script para añadir productos
│ ├── eliminar.php # Script para eliminar un producto
│ ├── vaciar.php # Script para vaciar la lista
│ └── leer.php # Script para leer la lista completa
└── index.html # Interfaz principal de la aplicación

## 🔧 Instrucciones para ejecutar el proyecto

1. **Requisitos previos**:
   - Tener instalado un servidor local como **XAMPP** o **WAMP**.  
   - Iniciar los módulos **Apache** y **MySQL**.  

2. **Configuración de la base de datos**:
   - Accede a [phpMyAdmin](http://localhost/phpmyadmin/).  
   - Crea una base de datos llamada `compra`.  
   - Dentro de la base de datos, crea una tabla llamada `lista` con la siguiente estructura:  
     - `productos` (tipo: `VARCHAR`).

3. **Configurar los archivos del proyecto**:
   - Coloca el proyecto en la carpeta `htdocs` de tu instalación de XAMPP.  

4. **Ejecutar la aplicación**:
   - Abre tu navegador y ve a [http://localhost/compra/](http://localhost/compra/).  

---

## 📋 Ejemplo de flujo

1. Escribe un producto en el campo de texto (por ejemplo, "Manzanas 🍎").  
2. Haz clic en "Añadir" o presiona la tecla Enter.  
3. El producto aparecerá en la lista.  
4. Puedes eliminarlo con el botón "X" o vaciar toda la lista con el botón "Vaciar".  

---

## 🎯 Próximos pasos

Este proyecto es solo el comienzo. Aunque es muy básico, me ha permitido practicar:

- Manejo de formularios y eventos en el frontend.  
- Conexiones y operaciones con bases de datos en PHP.  
- Conceptos básicos de **fetch API** para trabajar con solicitudes asíncronas.  

---

## 🤝 Contribuciones

Aunque este proyecto es personal, siempre estoy abierta a sugerencias. Si tienes ideas o comentarios, ¡me encantaría escucharlos! 💬