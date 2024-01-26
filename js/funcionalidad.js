
const msj = document.querySelector("#textarea"); // Textarea del mensaje a encriptar/desencriptar
const btnEncriptar = document.querySelector("#encriptar"); // Botón para encriptar
const btnDesencriptar = document.querySelector("#desencriptar"); // Botón para desencriptar
const btnCopiar = document.querySelector("#copiar"); // Botón para copiar el mensaje resultante
const msjFinal = document.querySelector("#resultado"); // Textarea para mostrar el mensaje resultante

const msjEncriptar = txt => {
  // Función para encriptar una sola letra
  const encriptacion = {
    'a': 'ia',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
  };  
 
  return encriptacion[txt] || txt;
};

const encriptar = txt => {
  // Función para encriptar un mensaje completo
  const msjEncriptado = txt.replace(/a|e|i|o|u/g, msjEncriptar); // Reemplaza cada letra por su versión encriptada
  toggleElementVisibility('ocultar', false); // Oculta el elemento con id 'ocultar'
  toggleElementVisibility('resultado', true); // Muestra el elemento con id 'resultado'
  toggleElementVisibility('copiar', true); // Muestra el elemento con id 'copiar'
  return msjEncriptado;
};

const msjDesencriptar = txt => {
  const desencriptacion = {
    'ia': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
  };


  return desencriptacion[txt] || txt;
};

const desencriptar = txt => {
  const msjDesencriptado = txt.replace(/ia|enter|imes|ober|ufat/g, msjDesencriptar);
  return msjDesencriptado;
};
btnEncriptar.addEventListener("click", event => {
  event.preventDefault();
  //alert('encriptar');
  const txt = msj.value;
  msjFinal.value = ""; 
  msj.value = "";
  const msjSeguro = encriptar(txt);
  msjFinal.value = msjSeguro;
});

btnDesencriptar.addEventListener("click", event => {
  event.preventDefault();
  //alert('desencriptar');
  const txt = msj.value;
  msjFinal.value = ""; 
  msj.value = "";
  const msjSeguro = desencriptar(txt);
  msjFinal.value = msjSeguro;
});

btnCopiar.addEventListener("click", event => {
  event.preventDefault();
  //alert('copiar');
  msjFinal.select();
  navigator.clipboard.writeText(msjFinal.value);
});

const toggleElementVisibility = (elementId, shouldShow) => {
  const element = document.getElementById(elementId);
  element.style.display = shouldShow ? 'block' : 'none';
};
