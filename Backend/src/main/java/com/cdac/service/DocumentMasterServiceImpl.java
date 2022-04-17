package com.cdac.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cdac.dao.DocumentMasterRepo;
import com.cdac.dao.UserRepo;
import com.cdac.pojos.Adoptionform;
import com.cdac.pojos.DocumentMaster;
import com.cdac.pojos.User;
import com.cdac.utils.StorageService;

@Transactional
@Service
public class DocumentMasterServiceImpl implements IDocumentMasterService {
	@Autowired
	private StorageService storageService;

	@Autowired
	private DocumentMasterRepo docRepo;

	@Autowired
	private UserRepo userRepo;

	@Override
	public DocumentMaster saveDocument(int id, DocumentMaster doc, MultipartFile addressProof,
			MultipartFile identityProof, MultipartFile incomeProof, MultipartFile nationalityCertificate,
			MultipartFile nonCriminal_certificate) {
		String nonCriminal = storageService.store(nonCriminal_certificate);
		String identity = storageService.store(identityProof);
		String income = storageService.store(incomeProof);
		String address = storageService.store(addressProof);
		String nationality = storageService.store(nationalityCertificate);
		doc.setNonCriminal_certificate(nonCriminal);
		doc.setIdentityProof(identity);
		doc.setNationalityCertificate(nationality);
		doc.setIncomeProof(income);
		doc.setAddressProof(address);
		User user = userRepo.findById(id).get();
		doc.setUser(user);
		return docRepo.save(doc);

	}

	@Override
	public DocumentMaster findDocById(int id) {
		Optional<DocumentMaster> document = docRepo.findById(id);

		return document.orElse(null);

	}

	@Override
	public DocumentMaster findDocumentById(int id) {
		// Optional<DocumentMaster> document = docRepo.findById(id);
		DocumentMaster document = docRepo.findById(id).get();
		return document;
	}

	@Override
	public void deleteDocument(int id) {
		docRepo.deleteById(id);

	}

	@Override
	public List<DocumentMaster> findAllDocuments() {

		return docRepo.findAll();
	}

	@Override
	public List<DocumentMaster> findAllByUser(User user) {
		List<DocumentMaster> list = docRepo.findAllByUser(user);
		return list;

			}

}
