package com.example.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="signups")
public class SignUp 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long phno;
	
	private String emailid;
	private String firstname;
	private String lastname;
	private String password;
	private String confirmpassword;
	
public SignUp() {
	
}
public SignUp(long phno,String firstname, String lastname, String emailid,  String password,
		String confirmpassword) {
	super();
	this.phno = phno;
	this.firstname = firstname;
	this.lastname = lastname;
	this.emailid = emailid;
	this.password = password;
	this.confirmpassword = confirmpassword;
}
   
   public String getFirstname() 
   {
	return firstname;
   }
   public void setFirstname(String firstname) 
   {
	this.firstname = firstname;
   }
   public String getLastname() 
   {
	return lastname;
   }
   public void setLastname(String lastname) 
   {
	this.lastname = lastname;
   }
   public String getEmailid() 
   {
	return emailid;
   }
   public void setEmailid(String emailid) 
   {
	this.emailid = emailid;
   }
   public long getPhno() 
   {
	return phno;
   }
   public void setPhno(long phno) 
   {
	this.phno = phno;
   }
   public String getPassword() 
   {
	return password;
   }
   public void setPassword(String password)
   {
	this.password = password;
   }
   public String getConfirmpassword() 
   {
	return confirmpassword;
   }
   public void setConfirmpassword(String confirmpassword) 
   {
	this.confirmpassword = confirmpassword;
   }
   
}