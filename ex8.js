estVisible = {};

function rouler(élément,bouton,estLatéral=false){
    if (estVisible[élément] == undefined){
        estVisible[élément] = true;
    }
    if (estVisible[élément]){
        document.getElementById(élément).style.display = "none";
        bouton.textContent = estLatéral?"▶":"▼";
        estVisible[élément] = false;
    }else{
        document.getElementById(élément).style.display = "block";
        bouton.textContent = estLatéral?"◀":"▲";
        estVisible[élément] = true;
    }
}