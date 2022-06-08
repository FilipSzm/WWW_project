package uj.www.backend_app.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;


@Entity
@Table(name = "users")
public class User implements UserDetails {
    @JsonIgnore
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @JsonProperty("username")
    @Column(name = "username")
    private String username;

    @JsonProperty("password")
    @Column(name = "password_hash")
    private String encodedPassword;

    @JsonProperty("rank")
    @Column(name = "rank")
    private String rank;

    public User() {
        username = null;
        encodedPassword = null;
        rank = null;
    }

    public User(String username, String encodedPassword, String rank) {
        this.username = username;
        this.encodedPassword = encodedPassword;
        this.rank = rank;
    }

    public String username() {
        return username;
    }

    public void updateRank(String rank) {
        this.rank = rank;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_" + rank));
    }

    @Override
    public String getPassword() {
        return encodedPassword;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
