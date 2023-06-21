package com.example.service;


import java.util.List;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.Entity.Fiction;
import com.example.dao.FictionRepository;

 

@Service
public class FictionService {

  @Autowired
  private FictionRepository fr;
  
  public void create(Fiction f)
  {
    fr.save(f);
  }
  
  public void delete(long id)
  {
    fr.deleteById((long) id);
    
     
  }
  
  public List<Fiction> get()
  {
    return fr.findAll();
  }
  
  public void update(Fiction f)
  {
    fr.save(f);
  }
  public Iterable<Fiction> sortDetailf(String city) {
	    Sort sort = Sort.by(Sort.Direction.ASC, "city");
	    return fr.findAll(sort);
	}


}