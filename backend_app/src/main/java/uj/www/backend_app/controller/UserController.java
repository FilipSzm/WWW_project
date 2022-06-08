package uj.www.backend_app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import uj.www.backend_app.model.RankParam;
import uj.www.backend_app.model.ResponseMessage;
import uj.www.backend_app.model.User;
import uj.www.backend_app.model.UserParam;
import uj.www.backend_app.service.UserService;

import java.util.List;

@Controller
@RequestMapping("/api/users")
public class UserController {

    private final PasswordEncoder passwordEncoder;

    private final UserService service;

    @Autowired
    public UserController(PasswordEncoder passwordEncoder, UserService service) {
        this.passwordEncoder = passwordEncoder;
        this.service = service;
    }

    @PostMapping("/create")
    public ResponseEntity<ResponseMessage> addUser(@RequestBody UserParam user) {
        service.addUser(new User(user.username(), passwordEncoder.encode(user.password()), "USER"));
        return ResponseEntity.ok().body(new ResponseMessage("User added successfully."));
    }

    @GetMapping("/get/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        return ResponseEntity.ok().body(service.user(id));
    }

    @GetMapping("/all")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public ResponseEntity<List<User>> allUsers() {
        return ResponseEntity.ok().body(service.users());
    }

    @DeleteMapping("/remove/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public ResponseEntity<ResponseMessage> deleteUser(@PathVariable Long id) {
        service.removeUser(id);
        return ResponseEntity.ok().body(new ResponseMessage("User deleted successfully."));
    }

    @PatchMapping("/update/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public ResponseEntity<ResponseMessage> updateUser(@PathVariable Long id, @RequestBody RankParam rank) {
        service.updateUser(id, rank.rank());
        return ResponseEntity.ok().body(new ResponseMessage("User updated successfully."));
    }
}
