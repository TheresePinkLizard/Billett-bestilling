package com.example.oblig3relasjonsdatabase;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;


@Repository
public class BillettRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreKunde(Billett innBillett){
        String sql = "INSERT INTO Billett (fornavn, antall) VALUES(?,?)";
        db.update(sql,innBillett.getFornavn(), innBillett.getAntall());
    }
    public List<Billett>
}
