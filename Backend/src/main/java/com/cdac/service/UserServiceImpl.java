package com.cdac.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cdac.dao.UserRepo;
import com.cdac.pojos.Roles;
import com.cdac.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserRepo userRepo;

	@Override
	public User authenticateUser(String email, String pwd) {
		return userRepo.findByEmailAndPassword(email, pwd);
	}

	@Override
	public User createNewUser(User user) {
		user.setRole(Roles.PARENT);
		user.setActive(true);
		System.out.println("cust " + user.toString());
		return userRepo.save(user);
	}

	@Override
	public User createNewAdmin(User user) {
		user.setRole(Roles.ADMIN);
		user.setActive(true);
		System.out.println("cust " + user.toString());
		return userRepo.save(user);
	}

	@Override
	public String changePassword(String email, String changePassword) {
		User user = userRepo.findByEmail(email);
		user.setPassword(changePassword);
		userRepo.save(user);
		return "Password is changed Successfully";
	}

	@Override

	public User findUserById(int userId) {
		try {
			User user = userRepo.findById(userId).get();
			return user;
		} catch (Exception e) {
			return null;
		}
	}

	@Override
	public User findByRole(Roles role) {
		try {
			User user = userRepo.findByRole(role).get();
			return user;
		} catch (Exception e) {
			return null;
		}
	}

	@Override
	public User updateUserProfile(int id, User user) {
		User user1 = userRepo.findById(id).orElse(null);
		user1.setName(user.getName());
		user1.setEmail(user.getEmail());
		user1.setMobileNumber(user.getMobileNumber());
		return userRepo.save(user1);
	}

	@Override
	public User save(User user1) {
		return userRepo.save(user1);
	}

	@Override
	public List<User> findByRoles(Roles role) {
		// TODO Auto-generated method stub
		return null;
	}

}
