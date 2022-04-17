package com.cdac.dto;

import org.springframework.beans.BeanUtils;
import org.springframework.web.multipart.MultipartFile;

import com.cdac.pojos.Adoptionform;
import com.cdac.pojos.ChildDetails;
import com.cdac.pojos.User;

public class ChildDetailsDTO {

	private int childId;
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
	private String image;
	private int user_id;

	public ChildDetailsDTO() {

	}

	public ChildDetailsDTO(int childId, int age, String bloodGroup, String colourComplexity, String deficiency,
			String education, String gender, String medicalHistory, String name, String other, String status,
			String image, int user_id) {
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
		this.user_id = user_id;
	}

	public int getChildId() {
		return childId;
	}

	public void setChildId(int childId) {
		this.childId = childId;
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

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
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
		return "ChildDetailsDTO [childId=" + childId + ", age=" + age + ", bloodGroup=" + bloodGroup
				+ ", colourComplexity=" + colourComplexity + ", deficiency=" + deficiency + ", education=" + education
				+ ", gender=" + gender + ", medicalHistory=" + medicalHistory + ", name=" + name + ", other=" + other
				+ ", status=" + status + ", image=" + image + "]";
	}

	public static ChildDetailsDTO fromEntity(ChildDetails entity) {
		ChildDetailsDTO dto = new ChildDetailsDTO();
		User user = entity.getUser();
		BeanUtils.copyProperties(entity, dto);
		dto.setUser_id(user.getId());
		return dto;
	}

	public static ChildDetails toEntity(ChildDetailsDTO childdetailsdto, User user) {
		ChildDetails entity = new ChildDetails();
		BeanUtils.copyProperties(childdetailsdto, entity, "image");
		entity.setUser(user);
		;
		return entity;
	}

}
