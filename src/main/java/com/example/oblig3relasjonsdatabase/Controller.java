package com.example.oblig2webny;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Controller {
    public List<Billett> billettene = new ArrayList<>();

    //mottar billetter
    @PostMapping("/leggTilBillett")
    public void leggTil (Billett enBillett){
        billettene.add(enBillett);

    }
    // henter billetter
    @GetMapping("/hentBilletter")
    public List<Billett> hent (){
        return billettene;
    }


    @GetMapping("/slettBillettene")
    public void slettBillettene(){
        billettene.clear();
    }
}
