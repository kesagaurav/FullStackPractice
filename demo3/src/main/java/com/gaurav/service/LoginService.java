package com.gaurav.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gaurav.model.Login;
import com.gaurav.repository.LoginRepository;

@Service
public class LoginService {
	@Autowired
	private LoginRepository erep;
	
	public Login CreateLogin(Login e) {
		return erep.save(e);
	}
	
	public List<Login> getAllLogins(){
		return erep.findAll();
	}
	
	public Login getById(int id) {
		return erep.findById(id).get();
	}
	
	public void deleteById(int id) {
		erep.deleteById(id);
	}
	
	
	public Login updateLogin(int id,Login e) {
		Optional<Login> emp=erep.findById(id);
		if(emp.isPresent()) {
			Login existingLogin=emp.get();
			existingLogin.setUsername(e.getUsername());
			existingLogin.setEmail(e.getEmail());
			existingLogin.setPassword(e.getPassword());
			return erep.save(existingLogin);
		}
		return null;
	}
	
	
}
