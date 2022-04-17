package com.cdac.dto;

import javax.persistence.Column;

import org.springframework.beans.BeanUtils;

import com.cdac.pojos.User;

public class UserProfileUpdateDTO {
	private int id;

	private String name;

	private long mobileNumber;

	private String email;

	public UserProfileUpdateDTO() {
		// TODO Auto-generated constructor stub
	}

	public UserProfileUpdateDTO(int id, String name, long mobileNumber, String email) {
		super();
		this.id = id;
		this.name = name;
		this.mobileNumber = mobileNumber;
		this.email = email;

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	@Override
	public String toString() {
		return "UserProfileUpdateDTO [id=" + id + ", name=" + name + ", mobileNumber=" + mobileNumber + ", email="
				+ email + "]";
	}

	public static User toEntity(UserProfileUpdateDTO dto) {
		User entity = new User();
		BeanUtils.copyProperties(dto, entity);
		return entity;
	}

}
