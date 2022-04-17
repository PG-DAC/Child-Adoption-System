package com.cdac.pojos;

import javax.persistence.*;

@Entity
@Table(name = "adoptionform")
public class Adoptionform {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private int formNo;

	@Column(name = "adoption_reason", length = 100)
	private String adoptionReason;

	@Column(name = "annual_income")
	private double annualIncome;

	@Column(name = "applicant_gender", length = 50)
	private String applicantGender;

	@Column(length = 50)
	private String biologicalChildren;

	@Column
	private int childId;

	@Column(name = "company_details", length = 70)
	private String companyDetails;

	@Column(length = 50)
	private String nationality;

	@Column(length = 50)
	private String occupation;

	@Column(nullable = false, length = 50)
	private String pancard;

	@Column(name = "permanent_address", length = 50)
	private String permanentAddress;

	@Column(length = 50)
	private String qualification;

	@Column(name = "spouse_gender", length = 50)
	private String spouseGender;

	@Column(name = "spouse_name", length = 50)
	private String spouseName;

	private boolean isActive;

	@Column(length = 50)
	private String response = "approve";

	// bi-directional many-to-one association to User
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User user;

	public Adoptionform() {

	}

	public Adoptionform(int formNo, String adoptionReason, double annualIncome, String applicantGender,
			String biologicalChildren, int childId, String companyDetails, String nationality, String occupation,
			String pancard, String permanentAddress, String qualification, String spouseGender, String spouseName,
			boolean isActive, String response, User user) {
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
		this.user = user;
	}

	public int getFormNo() {
		return formNo;
	}

	public void setFormNo(int formNo) {
		this.formNo = formNo;
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Adoptionform [formNo=" + formNo + ", adoptionReason=" + adoptionReason + ", annualIncome="
				+ annualIncome + ", applicantGender=" + applicantGender + ", biologicalChildren=" + biologicalChildren
				+ ", childId=" + childId + ", companyDetails=" + companyDetails + ", nationality=" + nationality
				+ ", occupation=" + occupation + ", pancard=" + pancard + ", permanentAddress=" + permanentAddress
				+ ", qualification=" + qualification + ", spouseGender=" + spouseGender + ", spouseName=" + spouseName
				+ ", isActive=" + isActive + ", response=" + response + ", user=" + user + "]";
	}

}
