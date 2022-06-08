package uj.www.backend_app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import uj.www.backend_app.model.File;
import uj.www.backend_app.repository.FileRepository;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.Objects;

@Service
public class FileService {

    private final FileRepository repository;

    @Autowired
    public FileService(FileRepository repository) {
        this.repository = repository;
    }

    public void store(MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(
                Objects.requireNonNull(file.getOriginalFilename())
        );

        File fileDB = new File(fileName, file.getContentType(), file.getBytes());
        repository.save(fileDB);
    }

    public File file(Long id) throws FileNotFoundException {
        return repository.findById(id).orElseThrow(FileNotFoundException::new);
    }

    public List<File> allFiles() {
        return  repository.findAll();
    }

    public void deleteFile(Long id) {
        var fileToDelete = repository.findById(id);
        fileToDelete.ifPresent(repository::delete);
    }
}
