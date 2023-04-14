package com.example.oblig3relasjonsdatabase;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Controller {

    @Autowired
    BillettRepository rep;

    //mottar billetter
    @PostMapping("/leggTilBillett")
    public void leggTil (Billett enBillett){
        rep.save(enBillett);

    }
    // henter billetter
    @GetMapping("/hentBilletter")
    public List<Billett> hent (){
        return rep.hentAlleBillettene();
    }


    @GetMapping("/slettBillettene")
    public void slettBillettene(){
        rep.slettAlleBilletter();
    }
}
