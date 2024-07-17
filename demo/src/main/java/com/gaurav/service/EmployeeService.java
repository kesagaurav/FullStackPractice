package com.gaurav.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gaurav.model.Employee;
import com.gaurav.repository.EmployeeRepository;

@Service
public class EmployeeService {
	@Autowired
	private EmployeeRepository erep;
	
	public Employee CreateEmployee(Employee e) {
		return erep.save(e);
	}
	
	public List<Employee> getAllEmployees(){
		return erep.findAll();
	}
	
	public Employee getById(int id) {
		return erep.findById(id).get();
	}
	
	public void deleteById(int id) {
		erep.deleteById(id);
	}
	
	
	public Employee updateEmployee(int id,Employee e) {
		Optional<Employee> emp=erep.findById(id);
		if(emp.isPresent()) {
			Employee existingEmployee=emp.get();
			existingEmployee.setAge(e.getAge());
			existingEmployee.setName(e.getName());
			existingEmployee.setLocation(e.getLocation());
			return erep.save(existingEmployee);
		}
		return null;
	}
	
	
}
