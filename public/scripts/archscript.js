let drop = false;
document.querySelector(".menu-btn").addEventListener("click", () => {
  if (drop == false) {
    document.querySelector(".menu-body").style.height = "270px";
    drop = true;
  } else {
    document.querySelector(".menu-body").style.height = "0px";
    drop = false;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const scrollPosition = targetElement.offsetTop - 90;

        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth"
        });
      }
    });
  });
});
