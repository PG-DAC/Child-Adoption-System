package com.cdac.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cdac.dto.AdoptionformDTO;
import com.cdac.dto.DocumentMasterDTO;
import com.cdac.dto.DocumentMasterInputDTO;
import com.cdac.dto.Response;
import com.cdac.pojos.Adoptionform;
import com.cdac.pojos.DocumentMaster;
import com.cdac.pojos.User;
import com.cdac.service.IDocumentMasterService;

@CrossOrigin
@RequestMapping("/document")
@RestController
public class DocumentMasterController {

	@Autowired
	private IDocumentMasterService documentService;

	@PostMapping("/adddocument/{id}")
	public ResponseEntity<?> saveDocument(@PathVariable("id") int id, DocumentMasterInputDTO docDto) {

		System.out.println(docDto);
		DocumentMaster doc = DocumentMasterInputDTO.toEntity(docDto);
		doc = documentService.saveDocument(id, doc, docDto.getAddressProof(), docDto.getIdentityProof(),
				docDto.getIncomeProof(), docDto.getNationalityCertificate(), docDto.getNonCriminal_certificate());

		return Response.success(doc);
	}

	// Admin view document
	@GetMapping("/viewdocument")
	public ResponseEntity<?> showDocuments() {
		// System.out.println("DocumentId = " + documentId);
		List<DocumentMaster> list = documentService.findAllDocuments();
		return Response.success(list);
	}

	// Find Documents By Id
	@GetMapping("/{id}")
	public ResponseEntity<?> findDocumentById(@PathVariable("id") int id) {
		DocumentMaster document = documentService.findDocById(id);
		DocumentMasterDTO result = DocumentMaster.fromEntity(document);
		if (result != null)
			return new ResponseEntity<>(result, HttpStatus.OK);
		else
			return new ResponseEntity<>("Document not found", HttpStatus.NO_CONTENT);
	}

	// Delete Document
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteDocumentById(@PathVariable("id") int id) {

		DocumentMaster document = documentService.findDocumentById(id);

		if (document != null) {
			documentService.deleteDocument(id);
			String message = "Document deleted succesfully";
			return Response.success(message);
		} else {
			String message = "Document not found";
			return Response.error(message);
		}
	}

}
