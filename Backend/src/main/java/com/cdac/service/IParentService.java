package com.cdac.service;

import java.util.List;

import com.cdac.dto.AdoptionformDTO;
import com.cdac.pojos.Adoptionform;
import com.cdac.pojos.DocumentMaster;
import com.cdac.pojos.User;

public interface IParentService {
	Adoptionform adoptionform(Adoptionform form) ;

	public Object showallchilds();

	Adoptionform findFormById(int formNo);

	Adoptionform findResponse(int id);
	
	List<Adoptionform> findAllByUser(User user);
	
	List<DocumentMaster> findDocumentResponse(int id);

	Object showcontactdetails();
	
}
