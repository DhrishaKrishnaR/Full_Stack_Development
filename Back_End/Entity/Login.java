package com.example.Entity;



import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="Logins")
public class Login
{
	@Id
	private String user;
	private String pwd;
	
	public Login(String user, String pwd) {
		super();
		this.user = user;
		this.pwd = pwd;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}


}