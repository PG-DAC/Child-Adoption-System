package com.cdac.dto;

import javax.persistence.Column;
import org.springframework.beans.BeanUtils;

import com.cdac.pojos.DocumentMaster;

public class DocumentMasterDTO {

	private int documentId;
	private String addressProof;

	private String identityProof;

	private String incomeProof;

	private String nationalityCertificate;

	private String nonCriminal_certificate;

	public DocumentMasterDTO() {
		// TODO Auto-generated constructor stub
	}

	public DocumentMasterDTO(int documentId, String addressProof, String identityProof, String incomeProof,
			String nationalityCertificate, String nonCriminal_certificate) {
		super();
		this.documentId = documentId;
		this.addressProof = addressProof;
		this.identityProof = identityProof;
		this.incomeProof = incomeProof;
		this.nationalityCertificate = nationalityCertificate;
		this.nonCriminal_certificate = nonCriminal_certificate;
	}

	public int getDocumentId() {
		return documentId;
	}

	public void setDocumentId(int documentId) {
		this.documentId = documentId;
	}

	public String getAddressProof() {
		return addressProof;
	}

	public void setAddressProof(String addressProof) {
		this.addressProof = addressProof;
	}

	public String getIdentityProof() {
		return identityProof;
	}

	public void setIdentityProof(String identityProof) {
		this.identityProof = identityProof;
	}

	public String getIncomeProof() {
		return incomeProof;
	}

	public void setIncomeProof(String incomeProof) {
		this.incomeProof = incomeProof;
	}

	public String getNationalityCertificate() {
		return nationalityCertificate;
	}

	public void setNationalityCertificate(String nationalityCertificate) {
		this.nationalityCertificate = nationalityCertificate;
	}

	public String getNonCriminal_certificate() {
		return nonCriminal_certificate;
	}

	public void setNonCriminal_certificate(String nonCriminal_certificate) {
		this.nonCriminal_certificate = nonCriminal_certificate;
	}

	@Override
	public String toString() {
		return "DocumentMasterDTO [addressProof=" + addressProof + ", identityProof=" + identityProof + ", incomeProof="
				+ incomeProof + ", nationalityCertificate=" + nationalityCertificate + ", nonCriminal_certificate="
				+ nonCriminal_certificate + "]";
	}

}
