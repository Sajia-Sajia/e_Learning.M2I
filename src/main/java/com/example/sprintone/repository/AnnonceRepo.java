package com.example.sprintone.repository;

import com.example.sprintone.model.Annonce;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AnnonceRepo extends MongoRepository<Annonce,String> {
    List<Annonce> findByAuteurId(String professeurId);
}
