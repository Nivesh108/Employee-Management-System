package com.assignment.EmployeeManagementSystem;
import com.assignment.EmployeeManagementSystem.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmployeeManagementSystemApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeManagementSystemApplication.class, args);
	}

	@Autowired
	private EmployeeRepo employeeRepo;
	@Override
	public void run(String... args) throws Exception {
	}
}
