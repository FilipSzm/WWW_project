package uj.www.backend_app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import uj.www.backend_app.model.ResponseMessage;
import uj.www.backend_app.model.Sauce;
import uj.www.backend_app.service.SauceService;

import java.util.List;

@Controller
@RequestMapping("/api/sauces")
public class SauceController {

    private final SauceService service;

    @Autowired
    public SauceController(SauceService service) {
        this.service = service;
    }

    @PostMapping("/add")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public ResponseEntity<Sauce> add(@RequestBody Sauce sauce) {
        return ResponseEntity.ok().body(service.addSauce(sauce));
    }

    @GetMapping("/get/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    public ResponseEntity<Sauce> get(@PathVariable Long id) {
        return ResponseEntity.ok().body(service.sauce(id));
    }

    @GetMapping("/all")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    public ResponseEntity<List<Sauce>> getAll() {
        return ResponseEntity.ok().body(service.sauces());
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public ResponseEntity<ResponseMessage> remove(@PathVariable Long id) {
        service.removeSauce(id);

        return ResponseEntity.ok().body(new ResponseMessage("Sauce deleted successfully."));
    }
}
