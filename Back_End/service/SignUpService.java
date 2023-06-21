package com.example.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Entity.Login;
import com.example.Entity.SignUp;
import com.example.dao.LoginRepository;
import com.example.dao.SignUpRepository;
 


@Service
public class SignUpService {

	@Autowired
	private SignUpRepository sr;
	
	public List<SignUp> getSignUp(){
		return sr.findAll();
	}
	public void save(SignUp se)
	{
		sr.save(se);
	}
	
	public void update(SignUp se)
	{
		sr.save(se);
	}
	
	public void delete(String id)
	{
		sr.deleteById(id);	
	}

}