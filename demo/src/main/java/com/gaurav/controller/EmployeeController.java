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

import com.gaurav.model.Employee;
import com.gaurav.service.EmployeeService;

@RestController
@CrossOrigin("*")
public class EmployeeController {
	@Autowired
	private EmployeeService eser;
	@PostMapping("/employee")
	Employee CreateEmployee(@RequestBody Employee e) {
		return eser.CreateEmployee(e);
	}
	@GetMapping("/employees")
	List<Employee> getAllEmployees(){
		return eser.getAllEmployees();
	}
	@GetMapping("/employee/{id}")
	Employee getById(@PathVariable int id) {
		return eser.getById(id);
	}
	@DeleteMapping("/employee/{id}")
	void deleteById(@PathVariable int id) {
		eser.deleteById(id);
	}
	@PutMapping("/employee/{id}")
	public Employee updateEmployee(@PathVariable int id, @RequestBody Employee e) {
		return eser.updateEmployee(id, e);
	}
}
