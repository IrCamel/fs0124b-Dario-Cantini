package it.epicode.esercizioG1.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;

@Data
@EqualsAndHashCode(callSuper = false, onlyExplicitlyIncluded = true)
@Table(name = "CLIENTE")
@Entity
public class ClienteEntity {

    @Id
    @SequenceGenerator(name = "ClienteSequence", sequenceName = "CLIENTE_NUMERO_CLIENTE_SEQ", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ClienteSequence")
    @Column(name = "NUMERO_CLIENTE", unique = true, nullable = false)
    @EqualsAndHashCode.Include
    private Long id;

    @Column(name = "NOME", nullable = false, length = 50)
    private String nome;

    @Column(name = "COGNOME", nullable = false, length = 50)
    private String cognome;

    @Column(name = "ANNO_DI_NASCITA", nullable = false)
    private Date annoDiNascita;

    @Column(name = "REGIONE_RESIDENZA", nullable = false, length = 50)
    private String regioneResidenza;
}
