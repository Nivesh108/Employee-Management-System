package com.assignment.EmployeeManagementSystem.controller;
import com.assignment.EmployeeManagementSystem.model.Employee;
import com.assignment.EmployeeManagementSystem.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import java.util.List;

@RestController
@RequestMapping
@CrossOrigin("*")
public class EmployeeController {
    @Autowired
    private EmployeeRepo employeeRepo;

    //Getting List of all employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeRepo.findAll();
    }

    //Creating a new Employee
    @PostMapping("/createEmployee")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepo.save(employee);
    }

    //Get Employee by its id
    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee employee = employeeRepo.findById(id).orElseThrow(() -> new ResourceAccessException("Employee Doesn't exists"));
        return ResponseEntity.ok(employee);
    }

    // Edit any employee's details by its id
    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employee){
        Employee updateEmployee = employeeRepo.findById(id).orElseThrow(() -> new RuntimeException());
        updateEmployee.setFirstName(employee.getFirstName());
        updateEmployee.setLastName(employee.getLastName());
        updateEmployee.setEmailId(employee.getEmailId());
        employeeRepo.save(updateEmployee);
        return ResponseEntity.ok(updateEmployee);
    }

    //Delete an employee
    @DeleteMapping("{id}") 
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable Long id){
        employeeRepo.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
