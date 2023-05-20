package com.example.oblig3relasjonsdatabase;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="endring")
public class Endring {

    @Id
    @GeneratedValue
    private int id; // primærnøkkel
    private String gammelVerdi;

    private String nyVerdi;

}
