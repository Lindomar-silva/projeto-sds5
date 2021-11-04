package com.devsuperior.dsvendas.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.entities.Sale;
import com.devsuperior.dsvendas.repositories.SaleRepository;
import com.devsuperior.dsvendas.repositories.SellerRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository repository;

	@Autowired
	private SellerRepository sellerRepository;

	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable) {
		// Evitando interações repetidas ao banco de dados
		// Busaca todoas os vendedores e trás para a memória (JPA armazena em cache)
		// Só fazer isso por que tem poucos vendedores
		sellerRepository.findAll();

		Page<Sale> sales = repository.findAll(pageable);
//		return sales.stream().map(s -> new SaleDTO(s)).collect(Collectors.toList());
		return sales.map(s -> new SaleDTO(s));
	}
}
