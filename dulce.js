document.addEventListener("DOMContentLoaded", () => {
  const detalleDulce = document.getElementById("detalle-dulce");

  const urlParams = new URLSearchParams (window.location.search);
  const idDulce= urlParams.get ("id");

  const datosDulces= JSON.parse (localStorage.getItem("dulces"));

  const dulceSeleccionado= datosDulces.dulces.find(
    (dulce) => dulce.id == idDulce
  );

  if(dulceSeleccionado){
    const contenedorDetallesDulce= document.createElement("div");
    contenedorDetallesDulce.innerHTML= `
    <img src="${dulceSeleccionado.img}"class="img-fluid">
    <h1>${dulceSeleccionado.nombre}</h1>
    <h2>${dulceSeleccionado.precio}<h2>
    <h2>${dulceSeleccionado.descripción}<h2>
    <h2>Presentación: ${dulceSeleccionado.presentación} </h2>
    <h2>Apto vegan@: ${dulceSeleccionado.vegano} </h2>
    <h2>Apto celíac@: ${dulceSeleccionado.celíaco} </h2>
     `;
    detalleDulce.appendChild(contenedorDetallesDulce);
  }
});
   

