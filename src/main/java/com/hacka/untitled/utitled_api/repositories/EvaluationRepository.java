package com.hacka.untitled.utitled_api.repositories;

import com.hacka.untitled.utitled_api.model.Evaluation;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface EvaluationRepository extends MongoRepository<Evaluation, String> {

    Evaluation findByBairro(String content);


}
