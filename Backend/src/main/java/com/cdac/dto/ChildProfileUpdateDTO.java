package com.cdac.dto;

import org.springframework.beans.BeanUtils;
import org.springframework.web.multipart.MultipartFile;

import com.cdac.pojos.ChildDetails;
import com.cdac.pojos.User;

public class ChildProfileUpdateDTO {

	private int age;
	private String bloodGroup;
	private String colourComplexity;
	private String deficiency;
	private String education;
	private String gender;
	private String medicalHistory;
	private String name;
	private String other;
	private String status;
	private MultipartFile image;
	private int user_id;

	public ChildProfileUpdateDTO() {
		// TODO Auto-generated constructor stub
	}

	public ChildProfileUpdateDTO(int age, String bloodGroup, String colourComplexity, String deficiency,
			String education, String gender, String medicalHistory, String name, String other, String status,
			MultipartFile image, int user_id) {
		super();
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
		this.user_id = user_id;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getBloodGroup() {
		return bloodGroup;
	}

	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}

	public String getColourComplexity() {
		return colourComplexity;
	}

	public void setColourComplexity(String colourComplexity) {
		this.colourComplexity = colourComplexity;
	}

	public String getDeficiency() {
		return deficiency;
	}

	public void setDeficiency(String deficiency) {
		this.deficiency = deficiency;
	}

	public String getEducation() {
		return education;
	}

	public void setEducation(String education) {
		this.education = education;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getMedicalHistory() {
		return medicalHistory;
	}

	public void setMedicalHistory(String medicalHistory) {
		this.medicalHistory = medicalHistory;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getOther() {
		return other;
	}

	public void setOther(String other) {
		this.other = other;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public MultipartFile getImage() {
		return image;
	}

	public void setImage(MultipartFile image) {
		this.image = image;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	@Override
	public String toString() {
		return "ChildProfileUpdateDTO [age=" + age + ", bloodGroup=" + bloodGroup + ", colourComplexity="
				+ colourComplexity + ", deficiency=" + deficiency + ", education=" + education + ", gender=" + gender
				+ ", medicalHistory=" + medicalHistory + ", name=" + name + ", other=" + other + ", status=" + status
				+ ", image=" + image + ", user_id=" + user_id + "]";
	}

	public static ChildProfileUpdateDTO fromEntity(ChildDetails entity) {
		ChildProfileUpdateDTO dto = new ChildProfileUpdateDTO();
		BeanUtils.copyProperties(entity, dto);
		return dto;
	}

	public static ChildDetails toEntity(ChildProfileUpdateDTO dto, User user) {

		ChildDetails entity = new ChildDetails();
		BeanUtils.copyProperties(dto, entity, "image");
		entity.setUser(user);
		return entity;
	}

}
