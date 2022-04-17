package com.cdac.pojos;

import java.util.ArrayList;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "users")
public class User extends BaseEntity {

	@Column(length = 50)
	private String name = "abc";

	@Column(name = "mob_number")
	private long mobileNumber;

	@Column(length = 50, unique = true)
	private String email;

	@Column(length = 50, nullable = false)
	private String password;

	@Enumerated(EnumType.STRING)
	private Roles role;

	boolean isActive;

	@JsonIgnore
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<Adoptionform> adoptionforms;

	// bi-directional many-to-one association to ChildDetail
	@JsonIgnore
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<ChildDetails> childDetails;

	@JsonIgnore
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<DocumentMaster> documentsMaster;

	public User() {
		this.adoptionforms = new ArrayList<Adoptionform>();
		this.childDetails = new ArrayList<ChildDetails>();
		this.documentsMaster = new ArrayList<DocumentMaster>();
	}

	public User(String name, long mobileNumber, String email, String password, Roles role, boolean isActive) {
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

	public List<Adoptionform> getAdoptionforms() {
		return adoptionforms;
	}

	public void setAdoptionforms(List<Adoptionform> adoptionforms) {
		this.adoptionforms = adoptionforms;
	}

	public List<ChildDetails> getChildDetails() {
		return childDetails;
	}

	public void setChildDetails(List<ChildDetails> childDetails) {
		this.childDetails = childDetails;
	}

	public List<DocumentMaster> getDocumentsMaster() {
		return documentsMaster;
	}

	public void setDocumentsMaster(List<DocumentMaster> documentsMaster) {
		this.documentsMaster = documentsMaster;
	}

	@Override
	public String toString() {
		return "User [name=" + name + ", mobileNumber=" + mobileNumber + ", email=" + email + ", password=" + password
				+ ", role=" + role + ", isActive=" + isActive + "]";
	}

}
