package com.example.dao;


import org.springframework.data.jpa.repository.JpaRepository;


import com.example.Entity.Login;

public interface LoginRepository extends JpaRepository<Login,String> {

	
}