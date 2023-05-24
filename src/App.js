import React, { useState } from "react";

function App() {
  const [numeroCifrado, setNumeroCifrado] = useState("");
  const [numeroDesencriptado, setNumeroDesencriptado] = useState("");

  function encriptarTelefono(event) {
    event.preventDefault();

    var telefonoInput = document.getElementById("telefono");
    var telefono = telefonoInput.value;

    if (telefono.length !== 4 || isNaN(telefono)) {
      alert("El número no cumple con las condiciones.");
      return;
    }

    var digitos = telefono.split("");
    var encriptado = "";

    for (var i = 0; i < digitos.length; i++) {
      var digito = parseInt(digitos[i]);
      var encriptadoDigito = (digito + 7) % 10;
      encriptado += encriptadoDigito;
    }

    var primerDigito = encriptado[0];
    var tercerDigito = encriptado[2];
    encriptado = encriptado.substr(0, 1) + tercerDigito + encriptado.substr(2, 1) + primerDigito;

    setNumeroCifrado(encriptado);
    setNumeroDesencriptado("");
  }

  function desencriptarTelefono() {
    var numeroCifradoInput = document.getElementById("numeroCifrado");
    var numeroCifrado = numeroCifradoInput.value;

    var primerDigito = numeroCifrado[0];
    var tercerDigito = numeroCifrado[2];
    var desencriptado = tercerDigito + numeroCifrado.substr(1, 1) + primerDigito + numeroCifrado.substr(3, 1);

    setNumeroDesencriptado("Teléfono desencriptado: " + desencriptado);
  }

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">
            Número sin encriptar
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="telefono"
            type="text"
            placeholder="Ingrese número a encriptar"
          />
        </div>
        <button
          onClick={encriptarTelefono}
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm py-2 px-4 mt-4 text-center mr-2 mb-2"
        >
          Cifrar Número
        </button>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numeroCifrado">
            Número cifrado
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="numeroCifrado"
            type="text"
            placeholder="Número cifrado"
            readOnly
            value={numeroCifrado}
          />
        </div>
        <button
          type="button"
          onClick={desencriptarTelefono}
          className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Desencriptar Número
        </button>
        <p className="text-center text-gray-700 text-sm mt-2">{numeroDesencriptado}</p>
      </form>
      <p className="text-center text-gray-500 text-xs">&copy; Eros Bormida | Gestión De Calidad | Trabajo Práctico 4°.</p>
    </div>
  );
}

export default App;
