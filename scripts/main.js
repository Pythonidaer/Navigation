function myFunction() {
    var x = document.getElementsByClassName("hamburger");
    if (x[0].className === "hamburger hamburger--spin mobile") {
      x[0].className += " is-active";
    } else {
      x[0].className = "hamburger hamburger--spin mobile";
    }
  }