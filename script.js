fetch("dulces.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    localStorage.setItem("dulces", JSON.stringify(datos));
    const gridDulces = document.getElementById("grid-dulces");
    const datosDulces = JSON.parse(localStorage.getItem("dulces"));
    
  console.log(datosDulces);
  if (datosDulces) {
    datosDulces.dulces.forEach((dulce) => {
     const gridItem = document.createElement("div");
   
      gridItem.classList.add("grid-item");
      gridItem.innerHTML = `
      <img src="${dulce.img}"class="img-fluid">
      <h4>${dulce.nombre}</h4>
      <h7>${dulce.precio}</h7>
      `
     
gridItem.addEventListener("click", () => {
        mostrarDetallesDulce(dulce);
      });

      gridDulces.appendChild(gridItem);
    });
  }
});

function mostrarDetallesDulce(dulce) {
  window.location.href = `dulce.html?id=${dulce.id}`;
}
