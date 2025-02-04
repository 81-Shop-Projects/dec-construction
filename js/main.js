// js/main.js

document.addEventListener("DOMContentLoaded", () => {
  // Example: If you have an inline SVG with id "map", you can select and work with it:
  const svgMap = document.getElementById("map");

  // Add event listeners to paths or elements inside the SVG:
  // (Make sure your SVG paths have classes or IDs so you can target them)
  const counties = svgMap.querySelectorAll("path.county");
  counties.forEach((county) => {
    county.addEventListener("click", () => {
      // For example, toggle a class when a county is clicked.
      county.classList.toggle("active");
    });
  });

  // Or if you want to load an external SVG file into a container:
  // fetch('svg-map.svg')
  //   .then(response => response.text())
  //   .then(svgContent => {
  //     document.getElementById("svg-container").innerHTML = svgContent;
  //   });
});
