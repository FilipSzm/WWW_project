package uj.www.backend_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uj.www.backend_app.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> { }
