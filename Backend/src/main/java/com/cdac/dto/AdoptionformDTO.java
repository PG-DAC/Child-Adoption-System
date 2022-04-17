package com.cdac.dto;

import javax.persistence.Column;

import org.springframework.beans.BeanUtils;

import com.cdac.pojos.Adoptionform;
import com.cdac.pojos.ChildDetails;

public class AdoptionformDTO {
	private int formNo;
	private String adoptionReason;
	private double annualIncome;
	private String applicantGender;
	private String biologicalChildren;
	private int childId;
	private String companyDetails;
	private String nationality;
	private String occupation;
	private String pancard;
	private String permanentAddress;
	private String qualification;
	private String spouseGender;
	private String spouseName;
	private boolean isActive;
	private String response;
	private int user_id;

	
	public AdoptionformDTO() {
		// TODO Auto-generated constructor stub
	}

	

	public AdoptionformDTO(int formNo, String adoptionReason, double annualIncome, String applicantGender,
			String biologicalChildren, int childId, String companyDetails, String nationality, String occupation,
			String pancard, String permanentAddress, String qualification, String spouseGender, String spouseName,
			boolean isActive, String response, int user_id) {
		super();
		this.formNo = formNo;
		this.adoptionReason = adoptionReason;
		this.annualIncome = annualIncome;
		this.applicantGender = applicantGender;
		this.biologicalChildren = biologicalChildren;
		this.childId = childId;
		this.companyDetails = companyDetails;
		this.nationality = nationality;
		this.occupation = occupation;
		this.pancard = pancard;
		this.permanentAddress = permanentAddress;
		this.qualification = qualification;
		this.spouseGender = spouseGender;
		this.spouseName = spouseName;
		this.isActive = isActive;
		this.response = response;
		this.user_id = user_id;
	}



	public String getAdoptionReason() {
		return adoptionReason;
	}

	public void setAdoptionReason(String adoptionReason) {
		this.adoptionReason = adoptionReason;
	}

	public double getAnnualIncome() {
		return annualIncome;
	}

	public void setAnnualIncome(double annualIncome) {
		this.annualIncome = annualIncome;
	}

	public String getApplicantGender() {
		return applicantGender;
	}

	public void setApplicantGender(String applicantGender) {
		this.applicantGender = applicantGender;
	}

	public String getBiologicalChildren() {
		return biologicalChildren;
	}

	public void setBiologicalChildren(String biologicalChildren) {
		this.biologicalChildren = biologicalChildren;
	}

	public int getChildId() {
		return childId;
	}

	public void setChildId(int childId) {
		this.childId = childId;
	}

	public String getCompanyDetails() {
		return companyDetails;
	}

	public void setCompanyDetails(String companyDetails) {
		this.companyDetails = companyDetails;
	}

	public String getNationality() {
		return nationality;
	}

	public void setNationality(String nationality) {
		this.nationality = nationality;
	}

	public String getOccupation() {
		return occupation;
	}

	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}

	public String getPancard() {
		return pancard;
	}

	public void setPancard(String pancard) {
		this.pancard = pancard;
	}

	public String getPermanentAddress() {
		return permanentAddress;
	}

	public void setPermanentAddress(String permanentAddress) {
		this.permanentAddress = permanentAddress;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public String getSpouseGender() {
		return spouseGender;
	}

	public void setSpouseGender(String spouseGender) {
		this.spouseGender = spouseGender;
	}

	public String getSpouseName() {
		return spouseName;
	}

	public void setSpouseName(String spouseName) {
		this.spouseName = spouseName;
	}

	public boolean isActive() {
		return isActive;
	}

	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}

	public String getResponse() {
		return response;
	}

	public void setResponse(String response) {
		this.response = response;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	
	
	public int getFormNo() {
		return formNo;
	}



	public void setFormNo(int formNo) {
		this.formNo = formNo;
	}



	@Override
	public String toString() {
		return "AdoptionformDTO [adoptionReason=" + adoptionReason + ", annualIncome=" + annualIncome
				+ ", applicantGender=" + applicantGender + ", biologicalChildren=" + biologicalChildren + ", childId="
				+ childId + ", companyDetails=" + companyDetails + ", nationality=" + nationality + ", occupation="
				+ occupation + ", pancard=" + pancard + ", permanentAddress=" + permanentAddress + ", qualification="
				+ qualification + ", spouseGender=" + spouseGender + ", spouseName=" + spouseName + ", isActive="
				+ isActive + ", Response=" + response + ", user_id=" + user_id + "]";
	}

	public static Adoptionform ToEntity(AdoptionformDTO dto) {
		Adoptionform entity = new Adoptionform();
		BeanUtils.copyProperties(dto, entity);
		return entity;

	}

	public static AdoptionformDTO fromEntity(Adoptionform entity) {
		AdoptionformDTO dto = new AdoptionformDTO();
		BeanUtils.copyProperties(entity, dto);
		return dto;
	}

}
