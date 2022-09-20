
var afficheur = 0;
let res=document.getElementById('init');
let btns = document.querySelectorAll("button");

function increm() {
    res.textContent = ++afficheur;
    changeColor();
}

function decrem() {
    res.textContent = --afficheur;
    changeColor();

}

function reset() {
    afficheur=0;
    document.getElementById("init").innerHTML = 0;
    changeColor();
}


function changeColor() {
    if (afficheur> 0) {
      res.style.color = "green";
    } else if (afficheur == 0) {
      res.style.color = "blue";
    } else {
      res.style.color = "red";
    }
  }

btns[0].addEventListener("click", decrem);
btns[1].addEventListener("click", reset);
btns[2].addEventListener("click", increm);