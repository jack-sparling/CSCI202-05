
$.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
    var number = data['number'];
    $('#SpacePeople').html(number);

    var img = document.createElement("img");
    img.src = "rocket.webp";
    var src = document.getElementById("rocket");
    src.appendChild(img);
   
    data['people'].forEach(function (d) {
        $('#astroNames').append('<li>' + d['name']+ '</li>');
    });

    data['people'].forEach(function (d) {
        $('#astroCraft').append('<li>' + d['craft']+ '</li>');
    });
});

function toggleText() {
    var text = document.getElementById("num");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  function toggleText2() {
    var text = document.getElementById("names");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  function toggleText3() {
    var text = document.getElementById("craft");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  function toggleText0() {
    var text = document.getElementsByClassName("hide");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
