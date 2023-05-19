package com.example.oblig3relasjonsdatabase;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Controller {

    Logger logger = LoggerFactory.getLogger(Controller.class);

    @Autowired
    BillettRepository rep;

    //mottar billetter
    @PostMapping("/leggTilBillett")
    public void leggTil (Billett enBillett){
       /* if(validerBillettOK(billett)){

        } else {

        }*/
        rep.save(enBillett);
    }

    // henter billetter
    @GetMapping("/hentBilletter")
    public List<Billett> hent (){
        // henter rep sortert
        return rep.findByOrderByEtternavn();

    }

    @GetMapping("/endre")
    public void endre (){
        List<Billett> liste = rep.findAll();

        // løpe igjennom rep, finne og gjøre endringer
        for(Billett billett : liste){
            if (billett.getEtternavn().equals("Hansen")){
                billett.setEtternavn("Olsen");
                rep.save(billett);
            }
        }
    }

    // slette billetter
    @GetMapping("/slettBillettene")
    public void slettBillettene(){
        rep.deleteAll();
    }
}
