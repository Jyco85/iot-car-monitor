alert("Hola mundo");




let mensaje=document.getElementById('respuesta');

function callApiRequest() {
  // Hacer una petición para un usuario con ID especifico
  axios
    .get(
      "https://18.116.14.205/iot-car-control/back-end/apis/getRegistro.php" )
    .then(function (response) {
      // manejar respuesta exitosa
      console.log(response);

      let respuestaServidor = 
      response.data == "F"
      ? "ADELANTE"

    :response.data == "B"
      ? "ATRAS"

     : response.data == "R"
      ? "IZQUIERDA"

      :response.data == "L"
      ? "DERECHA": "DETENER";


      respuesta.innerHTML="Respuesta:" + respuestaServidor ;
    })
    .catch(function (error) {
      // manejar error
      console.log(error);
    })
    .finally(function () {
      // siempre sera executado
    });
  }

  setInterval(callApiRequest, 2000);
    
