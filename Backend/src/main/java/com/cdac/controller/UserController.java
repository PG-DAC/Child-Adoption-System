package com.cdac.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.EmailAndPasswordDto;
import com.cdac.dto.Response;
import com.cdac.dto.UserDTO;
import com.cdac.dto.UserProfileUpdateDTO;
import com.cdac.pojos.User;
import com.cdac.service.IUserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

	@Autowired
	private IUserService userService;

	// Login
	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@RequestBody EmailAndPasswordDto login) {
		User user = userService.authenticateUser(login.getEmail(), login.getPassword());
		if (user != null) {

			return new ResponseEntity<>(user, HttpStatus.OK);
		}
		return new ResponseEntity<>("No User Found With this credentials", HttpStatus.NO_CONTENT);
	}

	// User register
	@PostMapping("/userregister")
	public ResponseEntity<?> addUser(@RequestBody UserDTO userdto) {

		User user = UserDTO.ToEntity(userdto);
		user = userService.createNewUser(user);
		return new ResponseEntity<>(user, HttpStatus.OK);

	}

	// Admin register
	@PostMapping("/adminregister")
	public ResponseEntity<?> addAdmin(@RequestBody UserDTO userdto) {
		User user = UserDTO.ToEntity(userdto);
		user = userService.createNewAdmin(user);
		return new ResponseEntity<>(user, HttpStatus.OK);

	}

	// Change Password
	@PostMapping("/changepassword")
	public ResponseEntity<?> changePassword(@RequestBody EmailAndPasswordDto details) {
		String message = userService.changePassword(details.getEmail(), details.getPassword());
		return new ResponseEntity<>(message, HttpStatus.OK);
	}

	// Find User By Id
	@GetMapping("/{id}")
	public ResponseEntity<?> findUserById(@PathVariable("id") int id) {
		System.out.println(id);
		User user = userService.findUserById(id);
		return ResponseEntity.ok(user);
	}

	// Edit Parent Profile
	@PutMapping("/edit-profile")
	public ResponseEntity<?> updateUserInfo(@RequestBody User user) {
		User user1 = userService.findUserById(user.getId());
		if (user1 != null) {
			user1.setName(user.getName());
			user1.setMobileNumber(user.getMobileNumber());
			user1.setEmail(user.getEmail());
			User updateuser = userService.save(user1);
			ResponseEntity.ok(updateuser);
		}
		return null;
	}

}
