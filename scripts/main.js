function myFunction() {
    var x = document.getElementsByClassName("hamburger");
    var y = document.getElementsByClassName("nav-hidden");
    var a = y.classList;
    console.log(y);
    

    if (x[0].className === "hamburger hamburger--spin mobile" && y[0].className === "nav-fade nav-hidden") {
      x[0].className += " is-active";
      // y[0].className += " nav-visible";
      // y[0].classList.add('nav-fade');
      y[0].classList.add('nav-visible');



    } else {
      x[0].className = "hamburger hamburger--spin mobile";
      y[0].className = "nav-fade nav-hidden";
    }
  }