package com.cdac.dto;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import org.springframework.beans.BeanUtils;

import com.cdac.pojos.Roles;
import com.cdac.pojos.User;

public class UserDTO {

	private String name;

	private long mobileNumber;

	private String email;

	private String password;

	private Roles role;

	boolean isActive;

	public UserDTO() {
		// TODO Auto-generated constructor stub
	}

	public UserDTO(String name, long mobileNumber, String email, String password, Roles role, boolean isActive) {
		super();
		this.name = name;
		this.mobileNumber = mobileNumber;
		this.email = email;
		this.password = password;
		this.role = role;
		this.isActive = isActive;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Roles getRole() {
		return role;
	}

	public void setRole(Roles role) {
		this.role = role;
	}

	public boolean isActive() {
		return isActive;
	}

	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}

	@Override
	public String toString() {
		return "UserDTO [name=" + name + ", mobileNumber=" + mobileNumber + ", email=" + email + ", password="
				+ password + ", role=" + role + ", isActive=" + isActive + "]";
	}

	public static User ToEntity(UserDTO dto) {
		User entity = new User();
		BeanUtils.copyProperties(dto, entity);
		return entity;
	}

	public static UserDTO fromEntity(User entity) {
		UserDTO dto = new UserDTO();
		BeanUtils.copyProperties(entity, dto);
		return dto;
	}
}
