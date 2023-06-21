package com.example.controller;






import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.Entity.Book;
import com.example.service.BookService;
import com.fasterxml.jackson.core.JsonProcessingException;


import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController

@RequestMapping("/api/books")
public class BookController {
  @Autowired
  BookService bookService;

  @Operation(summary = "Create a new id")
  @ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Book created successfully"),
                     @ApiResponse(responseCode = "400",description  = "Book is invalid")})
  @ResponseStatus(HttpStatus.CREATED)
  
  @PostMapping(produces = "application/json" , consumes="application/json")
  public ResponseEntity<Book>  create (final @RequestBody Book book)
  {
    Book createbook = bookService.create(book);
    return ResponseEntity.ok(createbook);
    
  }

  //getbyID
  @Operation(summary = "Get an book with given id")
  @ApiResponses(value = {@ApiResponse(responseCode = "200" , description = "Getting book successful"),
               @ApiResponse(responseCode = "401" , description = "Invalid credentials"),
               @ApiResponse(responseCode = "404" , description = "Book not  found")
  })
  
  @GetMapping(value = "/{id}" , produces = "application/json")
  public ResponseEntity<Optional<Book>> read (final @PathVariable Long id){
    Optional<Book> createdbook   = bookService.read(id);
    return ResponseEntity.ok(createdbook);
  }
  
  
  //update
  
  @Operation(summary = "Update the detail by given id")
  @ApiResponses(value = {@ApiResponse(responseCode = "200" , description = "Details updated  successful"),
         @ApiResponse(responseCode = "401" , description = "Book is Invalid "),
         @ApiResponse(responseCode = "404" , description = "Book not  found")
})
  @PutMapping(value = "/{id}" , produces = "application/json" , consumes="application/json")
  public ResponseEntity<Book> update (final  @RequestBody Book book)
     throws JsonProcessingException
     {
      final Book
      updatedbook = bookService.update(book);
      return ResponseEntity.ok(updatedbook);
     }
  
  
  
  
  
  
  
  //delete
  @Operation(summary = "Delete a  book by given id")
  @ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Book deleted successfully"),
       @ApiResponse(responseCode = "401" , description = "Invalid credentials"),
         @ApiResponse(responseCode = "404" , description = "Book not  found")
  })
  @ResponseStatus(HttpStatus.OK)
  @DeleteMapping("/{id}")
  public void  delete (final @PathVariable("id") Long id)
  {
    bookService.delete(id);
  }
  

}