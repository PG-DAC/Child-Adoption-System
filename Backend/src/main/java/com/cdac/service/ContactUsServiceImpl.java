package com.cdac.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cdac.dao.ContactUsRepo;
import com.cdac.pojos.ContactUs;

@Service
@Transactional
public class ContactUsServiceImpl implements ContactUsService {
	@Autowired
	private ContactUsRepo contactDao;

	@Override
	public ContactUs save(ContactUs contact) {

		return contactDao.save(contact);
	}

	@Override
	public List<ContactUs> findAll() {
		return contactDao.findAll();

	}

	@Override
	public ContactUs findById(int id) {
		Optional<ContactUs> contactor = contactDao.findById(id);
		return contactor.orElse(null);
	}

}
