document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const mensajeError = document.getElementById('mensajeError');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    const usuario = document.getElementById('usuario').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();

    if (usuario === "" || contrasena === "") {
      mensajeError.textContent = "Por favor, ingresa usuario y contraseña.";
      return;
    }

    // Validación simple de ejemplo
    if (usuario === "admin" && contrasena === "1234") {
      mensajeError.textContent = "";

      // Guardar dato en localStorage (opcional)
      localStorage.setItem('usuario', usuario);

      // Aquí colocas la redirección:
      window.location.href = "../Usuario_Admin/1_Administrador.html"; 

    } else {
      mensajeError.textContent = "Usuario o contraseña incorrectos.";
    }
     if (usuario === "usuario" && contrasena === "12345") {
      mensajeError.textContent = "";

      // Guardar dato en localStorage (opcional)
      localStorage.setItem('usuario', usuario);

      // Aquí colocas la redirección:
      window.location.href = "../Usuario_Admin/4_reservas.html"; 

    } else {
      mensajeError.textContent = "Usuario o contraseña incorrectos.";
    }
  });
});
