package uj.www.backend_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uj.www.backend_app.model.File;

@Repository
public interface FileRepository extends JpaRepository<File, Long> { }
