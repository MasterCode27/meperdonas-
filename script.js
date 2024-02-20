
function mueveElBoton() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const newWidth = Math.random() * width;
    const newHeight = Math.random() * height;

    const btnNo = document.getElementById("btnNo");
    btnNo.style.position = "absolute";
    btnNo.style.left = newWidth + "px";
    btnNo.style.top = newHeight + "px";
  }
  
    function accionParaCuandoEllaDigaQueSi() {
    alert("¡Gracias me has perdonado! ❤️");
  }

  function accionParaCuandoEllaDigaQueSi() {
    alert("¡Ahora ya somos novios! ❤️");
  }

  function mueveElBoton() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const newWidth = Math.random() * width;
    const newHeight = Math.random() * height;

    const btnNo = document.getElementById("btnNo");
    btnNo.style.position = "absolute";
    btnNo.style.left = newWidth + "px";
    btnNo.style.top = newHeight + "px";
  }

    function accionParaCuandoEllaDigaQueSi() {
      const respuesta = confirm("¿Estás segura de que quieres perdonarme?");
      if (respuesta) {
        // Redireccionar a la nueva página si responde "Sí"
        window.location.href = "opcionsi.html";
      } else {
        alert("Espero que puedas reconsiderarlo 😊");
      }
    }

    