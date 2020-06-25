document.querySelector(".menu_toggle").addEventListener("click", () => {
    document.querySelector(".menu").style.display = "grid";
    document.querySelector(".blackout").style.display = "block";
});
    
document.querySelector(".menu_toggle_close").addEventListener("click", () => {
    document.querySelector(".menu").style.display = "none";
    document.querySelector(".blackout").style.display = "none";
});

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  //console.log(scroll);
  if (scroll >= 5) {
    //console.log('a');
    $("#nav").addClass("scroll");
    $(".menu").addClass("scroll");
  } else {
    //console.log('a');
    $("#nav").removeClass("scroll");
    $(".menu").removeClass("scroll");
  }
});






   