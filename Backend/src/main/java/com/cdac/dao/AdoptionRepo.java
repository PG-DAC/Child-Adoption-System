package com.cdac.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.dto.AdoptionformDTO;
import com.cdac.pojos.Adoptionform;
import com.cdac.pojos.User;

public interface AdoptionRepo extends JpaRepository<Adoptionform, Integer> {

	List<Adoptionform> findAllByisActive(boolean b);

	void save(AdoptionformDTO formDto);

	List<Adoptionform> findAllByformNo(int formNo);

	List<Adoptionform> findAllByUser(User user);

}
