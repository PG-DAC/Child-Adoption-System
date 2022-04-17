package com.cdac.controller;

import java.util.ArrayList;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.AdoptionformDTO;
import com.cdac.dto.ChildDetailsDTO;
import com.cdac.dto.DocumentMasterDTO;
import com.cdac.dto.DocumentMasterInputDTO;
import com.cdac.dto.Response;
import com.cdac.pojos.Adoptionform;
import com.cdac.pojos.ChildDetails;
import com.cdac.pojos.DocumentMaster;
import com.cdac.pojos.User;
import com.cdac.service.IDocumentMasterService;
import com.cdac.service.IParentService;
import com.cdac.service.IUserService;

@RestController
@RequestMapping("/parent")
@CrossOrigin
public class ParentController {

	@Autowired
	IParentService pService;

	@Autowired
	IUserService userService;
	
	@Autowired
	IDocumentMasterService docService;

	@PostMapping("/addadoptionform")
	public ResponseEntity<?> addNewForm(@RequestBody AdoptionformDTO formDto) {
		System.out.println(formDto);
		Adoptionform formEntity = AdoptionformDTO.ToEntity(formDto);
		User user = userService.findUserById(formDto.getUser_id());
		if (user == null) {
			return Response.error("Can't find your Account");
		} else {
			formEntity.setUser(user);
			formEntity = pService.adoptionform(formEntity);
			if (formEntity != null) {
				return Response.success(formEntity);
			} else {
				return Response.error("Failed To Save Child Adoption Form");
			}

		}
	}

	// View Adoption form response
	@GetMapping("/viewresponse/{id}")
	public ResponseEntity<?> showEnquiries(@PathVariable int id) {
	User user = userService.findUserById(id);
	
	List<Adoptionform> adoptionforms = pService.findAllByUser(user);
	
	 Stream<AdoptionformDTO> result = adoptionforms.stream().map(Adoptionform -> AdoptionformDTO.fromEntity(Adoptionform));
	
//	Adoptionform form = pService.findResponse(id);
		return Response.success(result);
	}

	// View Document response
	@GetMapping("/viewdocumentrespons/{id}")
	public ResponseEntity<?> showDocumentEnquiries(@PathVariable int id) {
//		User user = userService.findUserById(id);
//		
//		List<DocumentMaster> document = docService.findAllByUser(user);
//		Stream<DocumentMasterInputDTO> result =document.stream().map(DocumentMaster -> DocumentMasterInputDTO.fromEntity(DocumentMaster));
		List<DocumentMaster> document = pService.findDocumentResponse(id);
		
		return Response.success(document);
	}

	// request to get the list of all child
	@GetMapping("/childdetails")
	public ResponseEntity<?> showChilds() {
		return new ResponseEntity<>(pService.showallchilds(), HttpStatus.OK);
	}

	// Find Form By Id
	@GetMapping("/{id}")
	public ResponseEntity<?> findFormById(@PathVariable("id") int id) {
		Adoptionform adoptionform = pService.findFormById(id);
		AdoptionformDTO result = AdoptionformDTO.fromEntity(adoptionform);

		if (adoptionform != null) {
			return Response.success(result);
		} else {
			String message = "Form not exist";
			return Response.error(message);
		}
	}

}
