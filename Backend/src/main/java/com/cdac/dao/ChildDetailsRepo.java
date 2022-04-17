package com.cdac.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.pojos.ChildDetails;

public interface ChildDetailsRepo extends JpaRepository<ChildDetails, Integer> {

	
}
