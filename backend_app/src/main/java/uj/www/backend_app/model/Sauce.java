package uj.www.backend_app.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table(name = "sauces")
public class Sauce {
    @JsonIgnore
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @JsonProperty("name")
    @Column(name = "name")
    private String name;

    @JsonProperty("brand")
    @Column(name = "brand")
    private String brand;

    @JsonProperty("desc")
    @Column(name = "desc")
    private String desc;

    public Sauce() {
        name = null;
        brand = null;
        desc = null;
    }

    public Sauce(String name, String brand, String desc) {
        this.name = name;
        this.brand = brand;
        this.desc = desc;
    }
}
