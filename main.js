function changeColor(newColor) {
  var elem = document.getElementById("titulo1");
  // var elem = $("#titulo1");

  var elem2 = document.getElementById("titulo2");
  var elem3 = document.getElementById("titulo3");
  elem.style.color = newColor;
  elem2.style.color = newColor;
  elem3.style.color = newColor;
}

function loadHtml() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.write(this.responseText);
  };
  xhttp.open("GET", "ejemplo.html");
  xhttp.send();
}

function loadHtml2() {
  const xhttp2 = new XMLHttpRequest();
  xhttp2.onload = function () {
    document.write(this.response);
  };
  xhttp2.open("GET", "experience.html");

  xhttp2.send();
}

//usando jquery
$(function () {
  // $("#btn-hide").click(function () {
  //   $("#parrafo-creador").hide();
  // });

  $("#btn-hide").click(function () {
    $("#parrafo-creador").hide();
  });
});
