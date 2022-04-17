package com.cdac.service;

import java.util.List;

import com.cdac.dto.EnquiryResponsedto;
import com.cdac.pojos.Adoptionform;
import com.cdac.pojos.DocumentMaster;

public interface IAdminService {

	List<Adoptionform> getFormEnquiry();

	String setEnquiryResponse(EnquiryResponsedto response);

	long getAllRequest();

	List<DocumentMaster> getDocumentEnquiry();

	String setDocumentResponse(EnquiryResponsedto response, int id);

	int getAllChildCount();

	int getAllParentCount();

	public Object showallchilds();

}
