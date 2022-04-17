package com.cdac.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.pojos.DocumentMaster;
import com.cdac.pojos.User;

public interface DocumentMasterRepo extends  JpaRepository<DocumentMaster, Integer>{

	List<DocumentMaster> findByUser(User user);

	List<DocumentMaster> findAllByUser(User user);

}
