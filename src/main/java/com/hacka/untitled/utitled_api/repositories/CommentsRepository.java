package com.hacka.untitled.utitled_api.repositories;

import com.hacka.untitled.utitled_api.model.Comments;
import com.hacka.untitled.utitled_api.model.Evaluation;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CommentsRepository extends MongoRepository<Comments, String> {

    Comments findByContent(String comments);


}
