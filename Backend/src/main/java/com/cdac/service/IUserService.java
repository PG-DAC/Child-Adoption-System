package com.cdac.service;

import java.util.List;

import com.cdac.pojos.Roles;
import com.cdac.pojos.User;

public interface IUserService {
	
	
	User authenticateUser(String email, String pwd);

	User createNewUser(User user);

	User createNewAdmin(User user);

	String changePassword(String email, String changePassword);
	
	User findUserById(int id);

	User findByRole(Roles role);

	User updateUserProfile(int sellerId, User user);

	User save(User user1);

	List<User> findByRoles(Roles role);

}
