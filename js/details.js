let actualContenedor = null;

function toggleDetails(containerId) {
  const container = document.getElementById(containerId);
  const container5 = container.querySelector(".container5");
  if (actualContenedor === container5) {
    if (
      container5.style.display === "none" ||
      container5.style.display === ""
    ) {
      container5.style.display = "block";
      container5.style.maxHeight = "750px";
    } else {
      container5.style.maxHeight = "170px";
      container5.style.display = "";
    }
  } else {
    if (actualContenedor !== null) {
      actualContenedor.style.display = "";
      actualContenedor.style.maxHeight = "170px";
      container5.style.display = "block";
      container5.style.maxHeight = "750px";
    } else {
      container5.style.display = "block";
      container5.style.maxHeight = "750px";
    }
  }
  actualContenedor = container5;
}
