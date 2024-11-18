package com.example.sprintone.repository;

import com.example.sprintone.model.Professeur;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProfesseurRepo extends MongoRepository<Professeur,String> {
}
