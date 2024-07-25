package com.gaurav.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Login {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int lid;
	
	private String username;
	
	private String password;
	
	private String email;
	

}
