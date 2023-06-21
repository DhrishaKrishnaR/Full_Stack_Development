package com.example.service;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Entity.Book;
import com.example.dao.BookRepository;
 

@Service
public class BookService {
  @Autowired
  BookRepository bookRepository;
  
  public Book create(Book book)
  {
    return bookRepository.save(book);
  }

  public Optional<Book> read(Long id)
  {
    return bookRepository.findById(id);
  }
  
  public String delete(Long id)
  {
    bookRepository.deleteById((long) id);
    return id+" is deleted";
     
  }
  
  public List<Book> get()
  {
    return bookRepository.findAll();
  }
  
  public Book update(Book book)
  {
    return bookRepository.save(book);
  }
  

}