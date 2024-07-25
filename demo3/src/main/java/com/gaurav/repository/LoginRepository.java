package com.gaurav.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gaurav.model.Login;
@Repository
public interface LoginRepository extends JpaRepository<Login, Integer>{

}
