document.querySelectorAll(".county").forEach((e) => {
  e.addEventListener("mouseover", function () {
    window.onmousemove = function (j) {
      const x = j.clientX;
      const y = j.clientY;
      document.getElementById("name").style.top = y + 10 + "px";
      document.getElementById("name").style.left = x + 10 + "px";
    };

    document.getElementById("name").style.opacity = 1;
    document.getElementById("name-text").innerText = e.id;
  });

  e.addEventListener("mouseleave", function () {
    document.getElementById("name").style.opacity = 0;
  });

  e.addEventListener("click", function () {
    getUser(e.id);
  });
});
