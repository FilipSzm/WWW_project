package uj.www.backend_app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import uj.www.backend_app.model.File;
import uj.www.backend_app.model.ResponseFile;
import uj.www.backend_app.model.ResponseMessage;
import uj.www.backend_app.service.FileService;

import java.io.FileNotFoundException;
import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/api/files")
public class FileController {

    private final FileService service;

    @Autowired
    public FileController(FileService service) {
        this.service = service;
    }

    @PostMapping("/upload")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file) {
        String message;
        try {
            service.store(file);
            message = "Uploaded the file successfully: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
        } catch (Exception e) {
            message = "Could not upload the file: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }
    }
    @GetMapping("/all")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    public ResponseEntity<List<ResponseFile>> getListFiles() {
        List<ResponseFile> files = service.allFiles().stream().map(dbFile -> {
            String fileDownloadUri = ServletUriComponentsBuilder
                    .fromCurrentContextPath()
                    .path("/files/")
                    .path(dbFile.id().toString())
                    .toUriString();
            return new ResponseFile(
                    dbFile.name(),
                    fileDownloadUri,
                    dbFile.type(),
                    dbFile.data().length
            );
        }).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.OK).body(files);
    }
    @GetMapping("/get/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    public ResponseEntity<byte[]> getFile(@PathVariable Long id) throws FileNotFoundException {
        File fileDB = service.file(id);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileDB.name() + "\"")
                .body(fileDB.data());
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public ResponseEntity<ResponseMessage> removeFile(@PathVariable Long id) {
        service.deleteFile(id);

        return ResponseEntity.ok().body(new ResponseMessage("File deleted successfully."));
    }
}
