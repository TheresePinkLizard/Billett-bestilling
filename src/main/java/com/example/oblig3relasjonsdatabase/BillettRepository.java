package com.example.oblig3relasjonsdatabase;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BillettRepository extends JpaRepository<Billett, Long> {

    // sorterer etter etternavn
    List<Billett> findByOrderByEtternavn();
 
}
