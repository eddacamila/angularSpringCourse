package com.bolsadeideas.models.services;

import java.util.List;
import com.bolsadeideas.models.entity.Cliente;

public interface IClienteService {
	
	public List<Cliente> findAll();
	
	public Cliente findById(Long Id);
	
	public Cliente save(Cliente cliente);
	
	public void delete(Long id);

}
