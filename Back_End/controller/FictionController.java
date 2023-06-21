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
import com.example.service.FictionService;

@RestController

@CrossOrigin
public class FictionController {
	@Autowired
	private FictionService fs;
	
	 @GetMapping("/getf")
	 public List<Fiction> get()
	 {
		 return fs.get();
	 }
	 @PostMapping("/postf")
	 public void create(@RequestBody Fiction fe)
	 {
		 fs.create(fe);
	 }
	 
	 @PutMapping("/putf/{id}")
	 public void update(@PathVariable long id, @RequestBody Fiction fe)
	 {
		 fe.setId(id);
		 fs.update(fe);
	 }
	 
	 @DeleteMapping("/deletef")
	 public void delete(@RequestParam long id)
	 {
		 fs.delete(id);
	 }
	 @GetMapping("/sortDetailf/{city}")
	 public Iterable<Fiction> detailfSort(@PathVariable("city") String city) {
	     return fs.sortDetailf(city);
	 }

 
}