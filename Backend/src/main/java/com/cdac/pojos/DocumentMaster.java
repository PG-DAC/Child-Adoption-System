package com.cdac.pojos;

import javax.persistence.*;

import org.springframework.beans.BeanUtils;

import com.cdac.dto.DocumentMasterDTO;

@Entity
@Table(name = "document_master")
public class DocumentMaster {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "document_id", unique = true, nullable = false)
	private int documentId;

	@Column(name = "address_proof", length = 150)
	private String addressProof;

	@Column(name = "identity_proof", length = 150)
	private String identityProof;

	@Column(name = "income_proof", length = 150)
	private String incomeProof;

	@Column(name = "nationality_certificate", length = 150)
	private String nationalityCertificate;

	@Column(length = 150)
	private String nonCriminal_certificate;

	@Column(length = 50)
	private String Response;

	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User user;

	public DocumentMaster() {
	}

	public DocumentMaster(int documentId, String addressProof, String identityProof, String incomeProof,
			String nationalityCertificate, String nonCriminal_certificate, String response, User user) {
		super();
		this.documentId = documentId;
		this.addressProof = addressProof;
		this.identityProof = identityProof;
		this.incomeProof = incomeProof;
		this.nationalityCertificate = nationalityCertificate;
		this.nonCriminal_certificate = nonCriminal_certificate;
		Response = response;
		this.user = user;
	}

	public int getDocumentId() {
		return this.documentId;
	}

	public void setDocumentId(int documentId) {
		this.documentId = documentId;
	}

	public String getAddressProof() {
		return this.addressProof;
	}

	public void setAddressProof(String addressProof) {
		this.addressProof = addressProof;
	}

	public String getIdentityProof() {
		return this.identityProof;
	}

	public void setIdentityProof(String identityProof) {
		this.identityProof = identityProof;
	}

	public String getIncomeProof() {
		return this.incomeProof;
	}

	public void setIncomeProof(String incomeProof) {
		this.incomeProof = incomeProof;
	}

	public String getNationalityCertificate() {
		return this.nationalityCertificate;
	}

	public void setNationalityCertificate(String nationalityCertificate) {
		this.nationalityCertificate = nationalityCertificate;
	}

	public String getNonCriminal_certificate() {
		return this.nonCriminal_certificate;
	}

	public void setNonCriminal_certificate(String nonCriminal_certificate) {
		this.nonCriminal_certificate = nonCriminal_certificate;
	}

	public String getResponse() {
		return Response;
	}

	public void setResponse(String response) {
		Response = response;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public static DocumentMasterDTO fromEntity(DocumentMaster entity) {
		DocumentMasterDTO dto = new DocumentMasterDTO();
		BeanUtils.copyProperties(entity, dto);
		return dto;
	}

	@Override
	public String toString() {
		return "DocumentMaster [documentId=" + documentId + ", addressProof=" + addressProof + ", identityProof="
				+ identityProof + ", incomeProof=" + incomeProof + ", nationalityCertificate=" + nationalityCertificate
				+ ", nonCriminal_certificate=" + nonCriminal_certificate + ", Response=" + Response + ", user=" + user
				+ "]";
	}

}