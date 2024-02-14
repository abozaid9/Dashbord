document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".nav-link");
  
    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetSectionId = this.getAttribute("data-scroll-to");
        const targetSection = document.getElementById(targetSectionId);
        smoothScroll(targetSection);
      });
    });
  
    function smoothScroll(target) {
      const offset = target.offsetTop;
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  });
  