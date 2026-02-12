document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".slider-container img");
  let index = 0;

  if (slides.length > 0) {
    slides[index].classList.add("active");

    setInterval(() => {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    }, 3500);
  }

  const botonesInscripcion = document.querySelectorAll(".card button, .btn-principal");

  botonesInscripcion.forEach(boton => {
    boton.addEventListener("click", function () {
      alert("🎉 ¡Te has inscrito con éxito!");
    });
  });


  const loginBtn = document.querySelector(".login-box button");

  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      alert("✅ Has iniciado sesión con éxito (demo)");
    });
  }

   const formulario = document.getElementById("formulario-contacto");

  if (formulario) {

    formulario.addEventListener("submit", function (e) {

      e.preventDefault(); 

      const correo = document.getElementById("correo");
      const curso = document.getElementById("curso");

      const errorCorreo = document.getElementById("error-correo");
      const errorCurso = document.getElementById("error-curso");
      const mensajeExito = document.getElementById("mensaje-exito");

      let valido = true;

      errorCorreo.textContent = "";
      errorCurso.textContent = "";
      mensajeExito.textContent = "";

      correo.classList.remove("error-input", "success-input");
      curso.classList.remove("error-input", "success-input");

      if (correo.value.trim() === "") {
        errorCorreo.textContent = "El correo es obligatorio.";
        correo.classList.add("error-input");
        valido = false;

      } else if (!correo.value.includes("@")) {
        errorCorreo.textContent = "Ingresa un correo válido.";
        correo.classList.add("error-input");
        valido = false;

      } else {
        correo.classList.add("success-input");
      }

      if (curso.value.trim() === "") {
        errorCurso.textContent = "Especifica el curso de interés.";
        curso.classList.add("error-input");
        valido = false;

      } else {
        curso.classList.add("success-input");
      }

      if (valido) {
        mensajeExito.textContent = "📩 Información enviada correctamente. Revisa tu correo pronto.";
        formulario.reset();

        correo.classList.remove("success-input");
        curso.classList.remove("success-input");
      }

    });

  }

});
const preguntas = document.querySelectorAll(".faq-question");

preguntas.forEach(btn => {
  btn.addEventListener("click", function () {
    const respuesta = this.nextElementSibling;

    if (respuesta.style.maxHeight) {
      respuesta.style.maxHeight = null;
    } else {
      respuesta.style.maxHeight = respuesta.scrollHeight + "px";
    }
  });
});
