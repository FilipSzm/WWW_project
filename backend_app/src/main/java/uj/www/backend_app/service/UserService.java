package uj.www.backend_app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import uj.www.backend_app.model.User;
import uj.www.backend_app.repository.UserRepository;

@Service
public class UserService implements UserDetailsService {
    private UserRepository repository;

    @Autowired
    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return repository
                .findAll()
                .stream()
                .filter(user -> user.username().equals(username))
                .findFirst()
                .orElseThrow(() -> new UsernameNotFoundException("Username " + username + " not found."));
    }
}
