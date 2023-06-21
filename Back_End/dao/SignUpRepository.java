package com.example.dao;

import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.stereotype.Repository;

import com.example.Entity.SignUp;

@Repository
public interface SignUpRepository extends JpaRepository<SignUp, String>{

}
