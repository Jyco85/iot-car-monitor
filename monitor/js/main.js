alert("Hola mundo");

let respuesta=document.getElementById("respuesta");


// Función para llamar a la API

function CallApiRequest(estatus)
{
    // Hacer una petición para un usuario con ID especifico
    axios.get('https://3.23.103.41/iot-car-control/back-end/apis/getRegistro.php')
    .then(function (response) {
    // manejar respuesta exitosa
    console.log(response);
    
    let respuestaaServidor = response.data == 'R'?"Izquierda":response.data == 'B'?"Atras":response.data == 'L'?"Derecha":
    response.data == 'F'?"Adelante": "Detener";
    respuesta.innerHTML="Respuesta: " + respuestaaServidor;
    })
    .catch(function (error) {
    // manejar error
    console.log(error);
    })
    .finally(function () {
    // siempre sera executado
    });
}

setInterval(CallApiRequest, 2000);





    
