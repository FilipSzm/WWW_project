package uj.www.backend_app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uj.www.backend_app.model.Sauce;
import uj.www.backend_app.repository.SauceRepository;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class SauceService {

    private final SauceRepository repository;

    @Autowired
    public SauceService(SauceRepository repository) {
        this.repository = repository;
    }

    public Sauce addSauce(Sauce sauce) {
        return repository.save(sauce);
    }

    public Sauce sauce(Long id) {
        return repository.findById(id).orElseThrow(NoSuchElementException::new);
    }

    public List<Sauce> sauces() {
        return repository.findAll();
    }

    public void removeSauce(Long id) {
        var sauce = repository.findById(id);
        sauce.ifPresent(repository::delete);
    }
}
