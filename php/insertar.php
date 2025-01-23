<?php
// Incluir el archivo de conexión a la base de datos
require("datosConexion.php");

// Decodificar la entrada JSON recibida
$data = json_decode(file_get_contents("php://input"));

// Verificar si se recibió algún dato
if ($data) {
    $valores = $data->aGuardar; // Obtener el valor del producto a guardar

    // Consulta SQL para insertar el producto en la tabla 'lista'
    $sql = "INSERT INTO lista (productos) VALUES ('$valores')";

    // Ejecutar la consulta
    if ($conn->query($sql) === TRUE) {
        echo "ok"; // Respuesta exitosa
    } else {
        echo "Error: " . $conn->error; // Mostrar error si la consulta falla
    }
}

// Cerrar la conexión a la base de datos
$conn->close();
?>