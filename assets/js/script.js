let navTag = document.getElementsByTagName("nav");
let imgId = document.getElementById("img-id");

function cambioColore() {
  navTag.style.backgroundColor = "green";
  if (navTag.style.backgroundColor === "green") {
    navTag.style.backgroundColor = "red";
  }
  if (navTag.style.backgroundColor === "red") {
    navTag.style.backgroundColor = "blue";
  }
}

function cambioImg() {
  imgId.style.backgroundImage = "url(https://picsum.photos/200/300)";
}
