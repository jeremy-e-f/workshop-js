function actualiserTableau(){
    var container= $("#listeUsers tbody");

    fetch('https://loisirs-web-backend.cleverapps.io/users', {
        method: 'GET'
    }).then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        // lecture du corps de la réponse en tant que JSON.
        return response.json();
    }).then(function(responseAsJson) {
        // traitement de l'objet
        console.log(responseAsJson);
        var listeUsers= responseAsJson;
        $(container).html("");
        listeUsers.forEach(
            function(element){
                var ligne= "<tr>"+
                        "<td>"+element.id+"</td>"+
                        "<td>"+element.name+"</td>"+
                        "<td>"+element.password+"</td>"+
                    "</tr>";
                $(container).append(ligne)
            });
    }).catch(function(error) {
        console.log('Une erreur est survenue : ', error);
    });
}

function ajouterUser(){
    var name= $("input[name=nom]").val();
    var psw= $("input[name=psw]").val();
    console.log(name+" "+psw);
    
    fetch('https://loisirs-web-backend.cleverapps.io/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: '{"name": "'+name+'",'+
        '"password": "'+psw+'"}'
    });
}

actualiserTableau();