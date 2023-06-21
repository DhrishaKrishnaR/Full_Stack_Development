package com.example.controller;


import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Entity.Fiction;
import com.example.Entity.NonFiction;
import com.example.service.NonFictionService;

@RestController

@CrossOrigin
public class NonFictionController {
	@Autowired
	private NonFictionService ns;
	
	 @GetMapping("/getnf")
	 public List<NonFiction> get()
	 {
		 return ns.get();
	 }
	 @PostMapping("/postnf")
	 public void create(@RequestBody NonFiction ne)
	 {
		 ns.create(ne);
	 }
	 
	 @PutMapping("/putnf/{id}")
	 public void update(@PathVariable long id, @RequestBody NonFiction ne)
	 {
		 ne.setId(id);
		 ns.update(ne);
	 }
	 
	 @DeleteMapping("/deletenf")
	 public void delete(@RequestParam long id)
	 {
		 ns.delete(id);
	 }
	 @GetMapping("/sortDetailnf/{city}")
	 public Iterable<NonFiction> detailnfSort(@PathVariable("city") String city) {
	     return ns.sortDetailnf(city);
	 }
 
}