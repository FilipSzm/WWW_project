package uj.www.backend_app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import uj.www.backend_app.model.User;
import uj.www.backend_app.repository.UserRepository;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class UserService implements UserDetailsService {
    private final UserRepository repository;

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

    public User addUser(User user) {
        return repository.save(user);
    }

    public User user(Long id) {
        return repository.findById(id).orElseThrow(NoSuchElementException::new);
    }

    public List<User> users() {
        return repository.findAll();
    }

    public void removeUser(Long id) {
        var user = repository.findById(id);
        user.ifPresent(repository::delete);
    }

    public User updateUser(Long id, String rank) {
        var userToUpdate = repository.findById(id).orElseThrow(NoSuchElementException::new);

        userToUpdate.updateRank(rank);
        return repository.save(userToUpdate);
    }
}
