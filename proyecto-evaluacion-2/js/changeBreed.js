// se crea nueva funcion a partir de la anterior en documento seccion gatos y seccion perros, para así ocupar solo una
// esta recibe parametros desde la misma tabla
function changeBreed(tabla, apiName) {
  const nroTotalImagenes = 9;
  const nroColumnasPorFila = 3;
  const selectorTablaHTML = `#${tabla}`;
  const currentValue = $("#selectRazas").val();
  const breedId = currentValue != "Random" ? `&breed_id=${currentValue}` : "";
  const url = `https://api.${apiName}.com/v1/images/search?limit=${nroTotalImagenes}${breedId}`;

  //envio de datos a galería imagenes
  $(selectorTablaHTML).empty();
  generar_galeria_imagenes(
    selectorTablaHTML,
    nroTotalImagenes,
    nroColumnasPorFila,
    url,
    "Ver Detalle"
  );
}
//
function getBtnActionURL() {
  const nroTotalImagenes = 9;
  const nameAnimal = $("body > div > main > div > div > section > h2").text();
  const currentValue = $("#selectRazas").val();
  const domainAnimal = nameAnimal == "Perros" ? "thedogapi" : "thecatapi"; //if ternario
  const breedId = currentValue != "Random" ? `&breed_id=${currentValue}` : "";
  const url = `https://api.${domainAnimal}.com/v1/images/search?limit=${nroTotalImagenes}${breedId}`;

  return url;
}
