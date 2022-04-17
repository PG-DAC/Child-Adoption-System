package com.cdac.service;

import java.util.List;

import com.cdac.pojos.ContactUs;

public interface ContactUsService {
	ContactUs save(ContactUs contact);

	List<ContactUs> findAll();

	ContactUs findById(int id);

}
