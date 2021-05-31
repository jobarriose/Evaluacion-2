//Saltar Alerta en caso de tener o no los campos ingresados de manera correcta //
$.validator.setDefaults({
  invalidHandler: function () {
    alert("Tienes un campo mal ingresado");
  },
  submitHandler: function () {
    alert("Tus datos han sido enviados exitosamente!");
    onclick = location.href = "formulario-enviado.html";
  },
});
// validador de Contrasenia
$.validator.addMethod(
  "especialPass",
  function (value, element) {
    return (
      this.optional(element) || /^(?=\w*\d)(?=\w*[a-zA-Z])\S{8,16}$/.test(value)
    );
  },
  "Ingresa al menos 2 numeros y 2 letras, sin espacios ni simbolos. Minimo 8 caracteres, máximo 16."
);
// validador de Usuario
$.validator.addMethod(
  "especialUser",
  function (value, element) {
    return this.optional(element) || /^(?=\w*\d)\S{4,8}$/.test(value);
  },
  "el campo no debe tener espacios vacios y solo pueden ser letras o números. Máximo 8 caracteres."
);

$(document).ready(function () {
  $("#formulario-inicio").validate({
    errorClass: "has-error",
    validClass: "has-success",
    rules: {
      usuario: {
        required: true,
        especialUser: true,
      },
      password: {
        required: true,
        especialPass: true,
      },
    },
    // Mensaje en caso de error
    messages: {
      usuario: {
        required: "Por favor, ingrese u nombre de usuario",
      },

      password: {
        required: "Por favor, ingrese una contraseña",
      },
    },
    highlight: function (element) {
      $(element)
        .parents(".col-sm-10")
        .addClass("has-error")
        .removeClass("has-success");
    },
    unhighlight: function (element) {
      $(element)
        .parents(".col-sm-10")
        .addClass("has-success")
        .removeClass("has-error");
    },
  });
});
