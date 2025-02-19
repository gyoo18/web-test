// var form = document.getElementById("Formulaire");
// form.onsubmit = function(e){
//     var nom = document.getElementById("nom").value;
//     if (nom.trim() === ""){
//         alert("Le champ 'Nom' est obligatoire.");
//         e.preventDefault();
//     }
// };

function surFloutageNom(e){
    if(e.value.trim() === "" && e.hasAttribute("required")){
        e.setCustomValidity("Veuillez remplir ce champ d'un nom valide.");
    }else{
        e.setCustomValidity("");
    }

}

function surFloutageCourriel(e){
    var res = e.value.match(/^[a-zA-Z0-9\-\_]+(\.[a-zA-Z0-9\-\_]+)*@[a-zA-Z0-9\-\_]+(\.[a-z]{2,})+$/g);
    if(res != null && res.length == 1){
        e.setCustomValidity("");
    }else{
        e.setCustomValidity("Veuillez entrer une adresse courriel valide.")
    }
}

function surFloutageTel(e){
    var res = e.value.match(/\(?\ ?[0-9]{3}\ ?\)?(\ |\-|\/)?[0-9]{3}(\ |\-|\/)?[0-9]{4}$/g);
    var resFormaté = e.value.match(/\([0-9]{3}\)\ [0-9]{3}\ [0-9]{4}$/g);
    if((res != null && res.length == 1) || e.value.length == 0){
        if((resFormaté == null || resFormaté.length != 1) && e.value.length != 0){
            var no = e.value.match(/([0-9]{3}).*([0-9]{3}).*([0-9]{4})/);
            e.value = "("+no[1]+") "+no[2]+" "+no[3];
        }
        e.setCustomValidity("");
    }else{
        e.setCustomValidity("Veuillez entrer un numéro de téléphone valide.")
    }
}

function surFloutageMDP(e){
    var res = e.value.match(/(?=[a-z])(?=[A-Z])(?=[0-9])(?=[\!\?\#\$\%\&\*\@\-\=\<\>\\\/])/);
}