package com.gaurav.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.gaurav.model.Login;
import com.gaurav.service.LoginService;

@RestController
@CrossOrigin("*")
public class LoginController {
	@Autowired
	private LoginService eser;
	@PostMapping("/login")
	Login CreateLogin(@RequestBody Login e) {
		return eser.CreateLogin(e);
	}
	@GetMapping("/logins")
	List<Login> getAllLogins(){
		return eser.getAllLogins();
	}
	@GetMapping("/login/{id}")
	Login getById(@PathVariable int id) {
		return eser.getById(id);
	}
	@DeleteMapping("/login/{id}")
	void deleteById(@PathVariable int id) {
		eser.deleteById(id);
	}
	@PutMapping("/login/{id}")
	public Login updateLogin(@PathVariable int id, @RequestBody Login e) {
		return eser.updateLogin(id, e);
	}
}
