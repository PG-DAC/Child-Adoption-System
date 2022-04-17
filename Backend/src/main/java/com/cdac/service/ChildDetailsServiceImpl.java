package com.cdac.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.dao.ChildDetailsRepo;
import com.cdac.dto.ChildProfileUpdateDTO;
import com.cdac.pojos.ChildDetails;
import com.cdac.pojos.User;
import com.cdac.utils.StorageService;

import org.springframework.web.multipart.MultipartFile;

@Transactional
@Service
public class ChildDetailsServiceImpl implements IChildDetailsService {

	@Autowired
	private ChildDetailsRepo childrepo;

	@Autowired
	private StorageService storageService;

	@Override
	public ChildDetails update(int id, ChildDetails child) {

		Optional<ChildDetails> existingChild = childrepo.findById(id);
		if (existingChild.get() != null) {

			existingChild.get().setAge(child.getAge());
			existingChild.get().setBloodGroup(child.getBloodGroup());
			existingChild.get().setColourComplexity(child.getColourComplexity());
			existingChild.get().setDeficiency(child.getDeficiency());
			existingChild.get().setEducation(child.getEducation());
			existingChild.get().setGender(child.getGender());
			existingChild.get().setMedicalHistory(child.getMedicalHistory());
			existingChild.get().setName(child.getName());
			existingChild.get().setOther(child.getOther());
			existingChild.get().setStatus(child.getStatus());
			return childrepo.save(existingChild.get());
		}
		return null;
	}

	@Override
	public List<ChildDetails> findAllChild() {
		return childrepo.findAll();
	}

	@Override
	public ChildDetails findChildById(int id) {
		Optional<ChildDetails> child = childrepo.findById(id);
		return child.orElse(null);
	}

	@Override
	public void deleteChild(int id) {
		childrepo.deleteById(id);
	}

	@Override
	public ChildDetails addChild(ChildDetails child, MultipartFile image) {
		String fileName = storageService.store(image);
		child.setImage(fileName);
		return childrepo.save(child);
	}

	@Override
	public ChildDetails editChild(ChildDetails child, ChildProfileUpdateDTO childDetailsDTO, MultipartFile image) {
		String fileName = storageService.store(image);
		child.setImage(fileName);
		child.setAge(childDetailsDTO.getAge());
		child.setBloodGroup(childDetailsDTO.getBloodGroup());
		child.setColourComplexity(childDetailsDTO.getColourComplexity());
		child.setDeficiency(childDetailsDTO.getDeficiency());
		child.setEducation(childDetailsDTO.getEducation());
		child.setGender(childDetailsDTO.getGender());
		child.setMedicalHistory(childDetailsDTO.getMedicalHistory());
		child.setName(childDetailsDTO.getName());
		child.setOther(childDetailsDTO.getOther());
		child.setStatus(childDetailsDTO.getStatus());

		return childrepo.save(child);
	}

}
