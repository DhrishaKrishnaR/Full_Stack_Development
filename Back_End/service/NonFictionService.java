package com.example.service;


import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.Entity.Fiction;
import com.example.Entity.NonFiction;
import com.example.dao.NonFictionRepository;
 

@Service
public class NonFictionService {

  @Autowired
  private NonFictionRepository nr;
  
  public void create(NonFiction nf)
  {
    nr.save(nf);
  }
  
  public void delete(long id)
  {
    nr.deleteById((long) id);
    
     
  }
  
  public List<NonFiction> get()
  {
    return nr.findAll();
  }
  
  public void update(NonFiction nf)
  {
    nr.save(nf);
  }
  public Iterable<NonFiction> sortDetailnf(String city) {
	    Sort sort = Sort.by(Sort.Direction.ASC, "city");
	    return nr.findAll(sort);
	}

}