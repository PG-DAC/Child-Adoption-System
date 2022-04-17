package com.cdac.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.dao.AdoptionRepo;
import com.cdac.dao.ChildDetailsRepo;
import com.cdac.dao.DocumentMasterRepo;
import com.cdac.dao.UserRepo;
import com.cdac.dto.EnquiryResponsedto;
import com.cdac.pojos.Adoptionform;
import com.cdac.pojos.ChildDetails;
import com.cdac.pojos.DocumentMaster;
import com.cdac.pojos.Roles;
import com.cdac.pojos.User;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService {

	@Autowired
	private AdoptionRepo adpRepo;

	@Autowired
	private UserRepo userRepo;

	@Autowired
	private DocumentMasterRepo docRepo;

	@Autowired
	private ChildDetailsRepo childRepo;

	@Override
	public List<Adoptionform> getFormEnquiry() {
		List<Adoptionform> list = adpRepo.findAllByisActive(true);
		return list;
	}

	@Override
	public String setEnquiryResponse(EnquiryResponsedto response) {
		Optional<Adoptionform> form = adpRepo.findById(response.getId());
		Adoptionform enquiry = form.get();
		enquiry.setResponse(response.getResponse());
		enquiry.setActive(false);
		adpRepo.save(enquiry);

		return "Response is successfully Submitted";
	}

	@Override
	public long getAllRequest() {
		return adpRepo.count();
	}

	@Override
	public List<DocumentMaster> getDocumentEnquiry() {
		List<DocumentMaster> list = docRepo.findAll();
		return list;

	}

	@Override
	public String setDocumentResponse(EnquiryResponsedto response, int id) {

		Optional<DocumentMaster> form = docRepo.findById(id);
		DocumentMaster enquiry = form.get();
		enquiry.setResponse(response.getResponse());
		docRepo.save(enquiry);

		return "Response is successfully Submitted";
	}

	@Override
	public int getAllChildCount() {
		List<ChildDetails> list = childRepo.findAll();

		int count = 0;

		for (ChildDetails childDetails : list) {
			count++;
		}

		return count;
	}

	@Override
	public int getAllParentCount() {
		List<User> list = userRepo.findAllParent(Roles.PARENT);

		int count = 0;

		for (User user : list) {
			count++;
		}

		return count;
	}

	@Override
	public List<ChildDetails> showallchilds() {
		return childRepo.findAll();
	}

}
