package uj.www.backend_app.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "files")
public class File {
    @JsonIgnore
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @JsonProperty("name")
    @Column(name = "name")
    private String name;

    @JsonProperty("type")
    @Column(name = "type")
    private String type;

    @Lob
    @JsonProperty("data")
    @Column(name = "data")
    private byte[] data;

    public File() {
        name = null;
        type = null;
        data = null;
    }

    public File(String name, String type, byte[] data) {
        this.name = name;
        this.type = type;
        this.data = data;
    }

    public Long id() {
        return id;
    }

    public String name() {
        return name;
    }

    public String type() {
        return type;
    }

    public byte[] data() {
        return data;
    }
}
