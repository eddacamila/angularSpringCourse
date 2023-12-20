package com.bolsadeideas.models.dao;

import org.springframework.data.repository.CrudRepository;
import com.bolsadeideas.models.entity.Cliente;

public interface IClienteDao extends CrudRepository<Cliente, Long>{

}
