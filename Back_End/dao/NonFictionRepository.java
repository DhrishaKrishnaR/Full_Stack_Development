package com.example.dao;


import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.example.Entity.NonFiction;

@Repository
public interface  NonFictionRepository extends JpaRepository<NonFiction, Long>{

}
