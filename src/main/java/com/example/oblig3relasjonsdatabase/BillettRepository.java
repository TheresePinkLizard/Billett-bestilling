package com.example.oblig3relasjonsdatabase;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BillettRepository extends JpaRepository<Billett, Integer> {

    // sorterer etter etternavn
    List<Billett> findByOrderByEtternavn();

}

//når det er flere tabeller så skriv inn en tilsvarende overfor her
