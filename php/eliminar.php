<?php
require("datosConexion.php");

$data = json_decode(file_get_contents("php://input"));
if ($data) {
    $producto = $data->aEliminar; 
    $producto = $conn->real_escape_string($producto); 
    $sql = "DELETE FROM lista WHERE productos = '$producto'";
    
    if ($conn->query($sql) === TRUE) {
        echo "ok";
    } else {
        echo "Error: " . $conn->error;
    }
}

$conn->close();
?>