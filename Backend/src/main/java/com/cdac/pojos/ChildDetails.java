package com.cdac.pojos;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "child_details")

public class ChildDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "child_id", unique = true, nullable = false)
	private int childId;

	private int age;

	@Column(name = "blood_group", length = 50)
	private String bloodGroup;

	@Column(name = "colour_complexity", length = 50)
	private String colourComplexity;

	@Column(length = 50)
	private String deficiency;

	@Column(length = 50)
	private String education;

	@Column(length = 50)
	private String gender;

	@Column(name = "medical_history", length = 50)
	private String medicalHistory;

	@Column(length = 50)
	private String name;

	@Column(length = 100)
	private String other;

	@Column(length = 50)
	private String status;

	@Column(length = 100)
	private String image;

	// bi-directional many-to-one association to Registration form
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User user;

	public ChildDetails() {

	}

	public ChildDetails(int childId, int age, String bloodGroup, String colourComplexity, String deficiency,
			String education, String gender, String medicalHistory, String name, String other, String status,
			String image, User user) {
		super();
		this.childId = childId;
		this.age = age;
		this.bloodGroup = bloodGroup;
		this.colourComplexity = colourComplexity;
		this.deficiency = deficiency;
		this.education = education;
		this.gender = gender;
		this.medicalHistory = medicalHistory;
		this.name = name;
		this.other = other;
		this.status = status;
		this.image = image;
		this.user = user;
	}

	public int getChildId() {
		return this.childId;
	}

	public void setChildId(int childId) {
		this.childId = childId;
	}

	public int getAge() {
		return this.age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getBloodGroup() {
		return this.bloodGroup;
	}

	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}

	public String getColourComplexity() {
		return this.colourComplexity;
	}

	public void setColourComplexity(String colourComplexity) {
		this.colourComplexity = colourComplexity;
	}

	public String getDeficiency() {
		return this.deficiency;
	}

	public void setDeficiency(String deficiency) {
		this.deficiency = deficiency;
	}

	public String getEducation() {
		return this.education;
	}

	public void setEducation(String education) {
		this.education = education;
	}

	public String getGender() {
		return this.gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getMedicalHistory() {
		return this.medicalHistory;
	}

	public void setMedicalHistory(String medicalHistory) {
		this.medicalHistory = medicalHistory;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getOther() {
		return this.other;
	}

	public void setOther(String other) {
		this.other = other;
	}

	public String getStatus() {
		return this.status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "ChildDetails [childId=" + childId + ", age=" + age + ", bloodGroup=" + bloodGroup
				+ ", colourComplexity=" + colourComplexity + ", deficiency=" + deficiency + ", education=" + education
				+ ", gender=" + gender + ", medicalHistory=" + medicalHistory + ", name=" + name + ", other=" + other
				+ ", status=" + status + ", image=" + image + "]";
	}

}

