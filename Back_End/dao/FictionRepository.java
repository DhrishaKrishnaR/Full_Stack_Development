package com.example.dao;


import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.example.Entity.Fiction;

@Repository
public interface  FictionRepository extends JpaRepository<Fiction, Long>{

}