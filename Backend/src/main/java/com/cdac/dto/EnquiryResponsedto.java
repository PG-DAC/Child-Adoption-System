package com.cdac.dto;

public class EnquiryResponsedto {
	private String response;
	private int id;

	public EnquiryResponsedto() {
		// TODO Auto-generated constructor stub
	}

	public EnquiryResponsedto(String response, int id) {
		super();
		this.response = response;
		this.id = id;
	}

	public String getResponse() {
		return response;
	}

	public void setResponse(String response) {
		this.response = response;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

}
