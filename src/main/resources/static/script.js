
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
    //let tlfBoolean;
    let epostBoolean;

/*
    if(billett.filmDropdown === "Default") {
        $("#feilfilmDropdown").text("Du må velge film");
        filmBoolean = false;
    } else{
        $("#feilfilmDropdown").text("");
        filmBoolean = true;
    }

 */
    if (billett.antall <=0 ){
        $("#feilAntall").text(feil);
        antallBoolean = false;
    } else{
        $("#feilAntall").text("");
        antallBoolean = true;
    }
    if (billett.fornavn <=0 ){
        $("#feilFornavn").text(feil);
        fornavnBoolean = false;
    }else{
        $("#feilFornavn").text("");
       fornavnBoolean= true;
    }
    if (billett.etternavn <=0 ){
        $("#feilEtternavn").text(feil);
        etternavnBoolean= false;
    }else{
        $("#feilEtternavn").text("");
        etternavnBoolean = true;
    }
    /*
    if (billett.tlf <=0 ){
        $("#feilTlf").text(feil);
        tlfBoolean = false;
    }else{
        $("#feilTlf").text("");
       tlfBoolean= true;
    }

     */
    if (billett.epost <=0 ){
        $("#feilEpost").text(feil);
        epostBoolean= false;
    } else {
        $("#feilEpost").text("");
        epostBoolean = true;
    }
    // sjekker at alt er klart før posting
    //tlfBoolean && filmBoolean
    if (antallBoolean && fornavnBoolean && etternavnBoolean && epostBoolean && validerTlf() && validerDropdown()) {
        <!--Sender godkjent billett til controller-->
        $.post("/leggTilBillett", billett, function (data) {
            // funksjon som henter fra server
            hent();
        })

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
function validerTlf(){
    const tlf = $("#tlf").val();
    const re = /^[0-9]{8}$/; // tall 0-9 og maks 8 siffer
    const ok = re.test(tlf);
    if (!ok){
        $("#feilTlf").html("Skriv inn riktig tlf");
        return false; // koden oppe kan ikke kjøres før den returnerer true
    } else {
        $("#feilTlf").html(""); //resetter feilmld felt
        return true;
    }

    /*
    Andre regex koder:
    // alle tegn, bokstaver og tall som godtas. minst 2 bokstaver, maks 20

    navn: /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;
    adresse: /^[0-9a-zA-ZæøåÆØÅ. \-]{2,30}$/;

    merke: // første bokstav, andre bokstav, siffere
    /^[A-Z][A-Z][0-9]{5}$/;
     */
}

//validering med dropdown
function ValiderDropdown(){
    const film = $("#filmDropdown").val();
    if (film === "Default"){
        $("#feilfilmDropdown").html("Husk å velge film");
        return false;
    } else {
        $("#feilfilmDropdown").html("");
        return true;
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

