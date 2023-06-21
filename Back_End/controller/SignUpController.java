package com.example.controller;

import java.util.List;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.Entity.Login;
import com.example.Entity.SignUp;
import com.example.service.LoginService;
import com.example.service.SignUpService;


import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController

@CrossOrigin
public class SignUpController {
	@Autowired
	private SignUpService ss;
	
	 @GetMapping("/getsignup")
	 public List<SignUp> getSignUp()
	 {
		 return ss.getSignUp();
	 }
	 @PostMapping("/postsignup")
	 public void save(@RequestBody SignUp se)
	 {
		 ss.save(se);
	 }
	 
	 @PutMapping("/putsignup")
	 public void update(@RequestBody SignUp se,@RequestParam String id)
	 {
		 se.setEmailid(id);
		 ss.update(se);
	 }
	 
	 @DeleteMapping("/deletesignup")
	 public void delete(@RequestParam String id)
	 {
		 ss.delete(id);
	 }
	 
	
}