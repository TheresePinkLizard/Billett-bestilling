package com.example.oblig2webny;

public class Billett {
    private String filmDropdown;
    private String antall;

    private String fornavn;
    private String etternavn;
    private String tlf;
    private String epost;

    //tom konstruktør
    public Billett (){}

    //konstruktør

    public Billett(String filmDropdown, String antall, String fornavn, String etternavn, String tlf, String epost) {
        this.filmDropdown = filmDropdown;
        this.antall = antall;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.tlf = tlf;
        this.epost = epost;
    }

    public String getFilmDropdown() {
        return filmDropdown;
    }

    public void setFilmDropdown(String filmDropdown) {
        this.filmDropdown = filmDropdown;
    }

    public String getAntall() {
        return antall;
    }

    public void setAntall(String antall) {
        this.antall = antall;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getTlf() {
        return tlf;
    }

    public void setTlf(String tlf) {
        this.tlf = tlf;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }

}
