package com.example.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.example.Entity.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long>{

}
