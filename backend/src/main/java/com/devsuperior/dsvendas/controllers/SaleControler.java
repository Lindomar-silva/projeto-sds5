package com.devsuperior.dsvendas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.service.SaleService;

@RestController
@RequestMapping(path = "/sales")
public class SaleControler {

	@Autowired
	private SaleService service;

	@GetMapping
	public ResponseEntity<Page<SaleDTO>> listar(Pageable pageable) {
		return ResponseEntity.ok(service.findAll(pageable));
	}
}
