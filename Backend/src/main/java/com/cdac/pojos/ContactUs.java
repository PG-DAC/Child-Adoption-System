package com.cdac.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "contactUs")
public class ContactUs {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int serialId;
	
	@Column(length = 50)
	private String userName;
	
	@Column(length = 50)
	private String userEmail;
	
	@Column(length = 150)
	private String userMessage;

	public ContactUs() {

	}

	public ContactUs(int serialId, String userName, String userEmail, String userMessage) {
		super();
		this.serialId = serialId;
		this.userName = userName;
		this.userEmail = userEmail;
		this.userMessage = userMessage;
	}

	public int getSerialId() {
		return serialId;
	}

	public void setSerialId(int serialId) {
		this.serialId = serialId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserMessage() {
		return userMessage;
	}

	public void setUserMessage(String userMessage) {
		this.userMessage = userMessage;
	}

	@Override
	public String toString() {
		return "ContactUs [serialId=" + serialId + ", userName=" + userName + ", userEmail=" + userEmail
				+ ", userMessage=" + userMessage + "]";
	}

}
