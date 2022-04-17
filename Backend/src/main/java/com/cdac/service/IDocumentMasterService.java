package com.cdac.service;

import com.cdac.dao.DocumentMasterRepo;
import com.cdac.pojos.DocumentMaster;
import com.cdac.pojos.User;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public interface IDocumentMasterService {

	DocumentMaster findDocById(int id);

	DocumentMaster findDocumentById(int id);

	void deleteDocument(int id);

	List<DocumentMaster> findAllDocuments();

	DocumentMaster saveDocument(int id, DocumentMaster doc, MultipartFile addressProof, MultipartFile identityProof,
			MultipartFile incomeProof, MultipartFile nationalityCertificate, MultipartFile nonCriminal_certificate);

	List<DocumentMaster> findAllByUser(User user);

}
