package com.cdac.dto;

import org.springframework.beans.BeanUtils;

import org.springframework.web.multipart.MultipartFile;

import com.cdac.pojos.DocumentMaster;

public class DocumentMasterInputDTO {
	private int documentId;

	private MultipartFile addressProof;

	private MultipartFile identityProof;

	private MultipartFile incomeProof;

	private MultipartFile nationalityCertificate;

	private MultipartFile nonCriminal_certificate;
	
	private int user_id;

	public DocumentMasterInputDTO() {
		// TODO Auto-generated constructor stub
	}

	

	public DocumentMasterInputDTO(int documentId, MultipartFile addressProof, MultipartFile identityProof,
			MultipartFile incomeProof, MultipartFile nationalityCertificate, MultipartFile nonCriminal_certificate,
			int user_id) {
		super();
		this.documentId = documentId;
		this.addressProof = addressProof;
		this.identityProof = identityProof;
		this.incomeProof = incomeProof;
		this.nationalityCertificate = nationalityCertificate;
		this.nonCriminal_certificate = nonCriminal_certificate;
		this.user_id = user_id;
	}



	public int getDocumentId() {
		return documentId;
	}



	public void setDocumentId(int documentId) {
		this.documentId = documentId;
	}



	public MultipartFile getAddressProof() {
		return addressProof;
	}

	public void setAddressProof(MultipartFile addressProof) {
		this.addressProof = addressProof;
	}

	public MultipartFile getIdentityProof() {
		return identityProof;
	}

	public void setIdentityProof(MultipartFile identityProof) {
		this.identityProof = identityProof;
	}

	public MultipartFile getIncomeProof() {
		return incomeProof;
	}

	public void setIncomeProof(MultipartFile incomeProof) {
		this.incomeProof = incomeProof;
	}

	public MultipartFile getNationalityCertificate() {
		return nationalityCertificate;
	}

	public void setNationalityCertificate(MultipartFile nationalityCertificate) {
		this.nationalityCertificate = nationalityCertificate;
	}

	public MultipartFile getNonCriminal_certificate() {
		return nonCriminal_certificate;
	}

	public void setNonCriminal_certificate(MultipartFile nonCriminal_certificate) {
		this.nonCriminal_certificate = nonCriminal_certificate;
	}
	
	

	public int getUser_id() {
		return user_id;
	}



	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}



	
	@Override
	public String toString() {
		return "DocumentMasterInputDTO [addressProof=" + addressProof + ", identityProof=" + identityProof
				+ ", incomeProof=" + incomeProof + ", nationalityCertificate=" + nationalityCertificate
				+ ", nonCriminal_certificate=" + nonCriminal_certificate + ", user_id=" + user_id + "]";
	}



	public static DocumentMaster toEntity(DocumentMasterInputDTO docDto) {
		DocumentMaster entity = new DocumentMaster();
		BeanUtils.copyProperties(docDto, entity, "addressProof", "identityProof", "incomeProof",
				"nationalityCertificate", "nonCriminal_certificate");
		return entity;
	}

	public static Object fromEntity(DocumentMaster entity) {
		DocumentMasterInputDTO dto = new DocumentMasterInputDTO();
		BeanUtils.copyProperties(entity, dto);
		return dto;

	}

}
