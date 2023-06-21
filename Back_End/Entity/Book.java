package com.example.Entity;

import jakarta.persistence.Entity;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity

@Table(name = "bookdetails")

public class Book {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String author;
	private String book_name;
	private String city;
	private String donar_name;
	private String donar_num;
	private Integer num_of_books;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getBook_name() {
		return book_name;
	}
	public void setBook_name(String book_name) {
		this.book_name = book_name;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getDonar_name() {
		return donar_name;
	}
	public void setDonar_name(String donar_name) {
		this.donar_name = donar_name;
	}
	public String getDonar_num() {
		return donar_num;
	}
	public void setDonar_num(String donar_num) {
		this.donar_num = donar_num;
	}
	public Integer getNum_of_books() {
		return num_of_books;
	}
	public void setNum_of_books(Integer num_of_books) {
		this.num_of_books = num_of_books;
	}
	public Book()
	{
		
	}
	
	
}
