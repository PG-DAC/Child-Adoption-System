package com.cdac.controller;

import java.util.ArrayList;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.Response;
import com.cdac.pojos.ContactUs;
import com.cdac.service.ContactUsService;

@RequestMapping("/contactUs")
@CrossOrigin
@RestController
public class ContactUsController {
	@Autowired
	private ContactUsService contactService;

	@PostMapping("/add")
	public ResponseEntity<?> addContactUs(@RequestBody ContactUs contact) {
		ContactUs contactus = contactService.save(contact);
		return Response.success(contactus);

	}

	@GetMapping("/{id}")
	public ResponseEntity<?> contactUs(@PathVariable("id") int id) {
		ContactUs contact = contactService.findById(id);
		return Response.success(contact);
	}

	@GetMapping("")
	public ResponseEntity<?> findAllStorage() {
		// List<ContactUs> contactList= new ArrayList<>();
		List<ContactUs> storageList = contactService.findAll();
		System.out.println(storageList);
//	for (ContactUs contact : storageList) {
//		contactList.add(contact);
		// }
		return Response.success(storageList);

	}

}
