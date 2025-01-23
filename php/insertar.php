<?php

require("datosConexion.php");


$data = json_decode(file_get_contents("php://input"));


if ($data) {
    $valores = $data->aGuardar;


    $sql = "INSERT INTO lista (productos) VALUES ('$valores')";

 
    if ($conn->query($sql) === TRUE) {
        echo "ok"; // Respuesta exitosa
    } else {
        echo "Error: " . $conn->error; 
    }
}


$conn->close();
?>