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
    private Integer id;
    private String filmDropdown;
    private String antall;

    private String fornavn;
    private String etternavn;
    private String tlf;
    private String epost;


    //konstruktør

    public Billett(String filmDropdown, String antall, String fornavn, String etternavn, String tlf, String epost) {
        this.filmDropdown = filmDropdown;
        this.antall = antall;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.tlf = tlf;
        this.epost = epost;
    }

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
}
