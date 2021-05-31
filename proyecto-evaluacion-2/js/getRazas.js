$(document).ready(function () {
  // Buscar nombre del animal por medio del contenido de un titulo de la pagina.
  const nameAnimal = $("body > div > main > div > div > section > h2").text();

  const domainAnimal = nameAnimal == "Perros" ? "thedogapi" : "thecatapi"; //if ternario

  var url = `https://api.${domainAnimal}.com/v1/breeds`;

  $.get(url, (response) => {
    console.log("response: ", response);
    response.forEach((breed) =>
      // obetener las razas e ingresarlas al final del select
      $("#selectRazas").append(
        `<option value=${breed.id}>${breed.name}</option>`
      )
    );
  });
});
