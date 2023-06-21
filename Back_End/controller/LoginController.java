package com.example.controller;

import java.util.List;

import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.bind.annotation.RestController;

import com.example.Entity.Login;
import com.example.service.LoginService;

@RestController
@CrossOrigin
public class LoginController {
	@Autowired
	private LoginService ls;
	
	 @GetMapping("/getlogin")
	 public List<Login> getLoginDetails()
	 {
		 return ls.getLoginDetails();
	 }
	 @PostMapping("/postlogin")
	 public void saveData(@RequestBody Login le)
	 {
		 ls.saveData(le);
	 }
	 
	 @PutMapping("/putlogin")
	 public void updateData(@RequestBody Login le,@RequestParam String id)
	 {
		 le.setUser(id);
		 ls.updateData(le);
	 }
	 
	 @DeleteMapping("/deletelogin")
	 public void deleteData(@RequestParam String id)
	 {
		 ls.deleteData(id);
	 }
	 
	
}