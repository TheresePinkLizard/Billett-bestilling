
// kjøp billett knapp

function lagObjekt() {

    // legger verdi i objekt

    let billett = {
        filmDropdown: $("#filmDropdown").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        tlf: $("#tlf").val(),
        epost: $("#epost").val(),
    };
    let feil = "Du må fylle ut dette feltet ";

    // en boolean for hvert felt for at ingenting blir postet før alt er riktig
    let filmBoolean;
    let antallBoolean;
    let fornavnBoolean;
    let etternavnBoolean;
    let tlfBoolean;
    let epostBoolean;


    if(billett.filmDropdown === "Default") {
        filmBoolean = false;
        document.getElementById("feilfilmDropdown").innerHTML = "Du må velge film";
    } else{
        document.getElementById("feilfilmDropdown").innerHTML = "";
        filmBoolean = true;
    }
    if (billett.antall <=0 ){
        document.getElementById("feilAntall").innerHTML = feil;
        antallBoolean = false;
    } else{
        document.getElementById("feilAntall").innerHTML = "";
        antallBoolean = true;
    }
    if (billett.fornavn <=0 ){
        document.getElementById("feilFornavn").innerHTML = feil;
        fornavnBoolean = false;
    }else{
        document.getElementById("feilFornavn").innerHTML = "";
       fornavnBoolean= true;
    }
    if (billett.etternavn <=0 ){
        document.getElementById("feilEtternavn").innerHTML = feil;
        etternavnBoolean= false;
    }else{
        document.getElementById("feilEtternavn").innerHTML = "";
        etternavnBoolean = true;
    }
    if (billett.tlf <=0 ){
        document.getElementById("feilTlf").innerHTML = feil;
        tlfBoolean = false;
    }else{
        document.getElementById("feilTlf").innerHTML = "";
       tlfBoolean= true;
    }
    if (billett.epost <=0 ){
        document.getElementById("feilEpost").innerHTML = feil;
        epostBoolean= false;
    } else {
        document.getElementById("feilEpost").innerHTML = "";
        epostBoolean = true;
    }
    // sjekker at alt er klart før posting
    if (filmBoolean && antallBoolean && fornavnBoolean && etternavnBoolean && tlfBoolean && epostBoolean) {
        <!--Sender godkjent billett til controller-->
        $.post("/leggTilBillett", billett, function (data) {

        })
        // funksjon som henter fra server
        hent();

        // resetter felter
        if (antall.value !=="") {
            antall.value = "";
        }

        if (fornavn.value !=="") {
            fornavn.value = "";

        }
        if (etternavn.value !=="") {
            etternavn.value = "";

        }
        if (tlf.value !=="") {
            tlf.value = "";

        }
        if (epost.value !=="") {
            epost.value = "";

        }
    }



}
//henter info fra server
function hent (){
    $.get("/hentBilletter", function (data){
        formaterData(data);
    })
}
// sender billetter ut i div
function formaterData(data){
    let ut = "<table class='table'><tr> <th>Film:</th><th>Fornavn: </th> <th>Etternavn: </th> <th> Antall: </th> <th> Tlf: </th> <th> Epost: </th></tr>";

    for (let billett of data){
        ut += "<tr>"+"<td>"+ billett.filmDropdown +"</td>"+
            "<td>"+ billett.fornavn +"</td>" +
            "<td>"+ billett.etternavn + "</td>" +
            "<td>"+ billett.antall +"</td>" +
            "<td>"+ billett.tlf +"</td>" +
            "<td>"+ billett.epost +"</td>"+"</tr>";
    }
    $("#alleBillettene").html(ut);

}


// slett billetter knapp og tømmer array
    function emptyArray() {
        $.get("/slettBillettene", function () {
            hent();
        })
    }

