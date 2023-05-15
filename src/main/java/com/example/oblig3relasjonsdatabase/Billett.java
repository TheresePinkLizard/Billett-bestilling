package com.example.oblig3relasjonsdatabase;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="billett")

public class Billett {

    @Id
    @GeneratedValue
    private int id; // primærnøkkel
    private String filmDropdown;
    private String antall;

    private String fornavn;
    private String etternavn;
    private String tlf;
    private String epost;



/*
    @Override
    public String toString() {
        return "Billett{" +
                "id=" + id +
                ", filmDropdown='" + filmDropdown + '\'' +
                ", antall='" + antall + '\'' +
                ", fornavn='" + fornavn + '\'' +
                ", etternavn='" + etternavn + '\'' +
                ", tlf='" + tlf + '\'' +
                ", epost='" + epost + '\'' +
                '}';
    }
    */

}
