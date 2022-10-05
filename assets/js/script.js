let navTag = document.getElementsByTagName("nav")[0];
let imgId = document.getElementById("img-id");

function cambioColore() {
  navTag.style.backgroundColor = "red";
}

function cambioImg() {
  imgId.style.backgroundImage = "url(https://picsum.photos/200/300)";
}
