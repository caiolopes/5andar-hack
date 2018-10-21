package com.hacka.untitled.utitled_api.controller;


import com.hacka.untitled.utitled_api.model.Comments;
import com.hacka.untitled.utitled_api.model.Evaluation;
import com.hacka.untitled.utitled_api.repositories.CommentsRepository;
import com.hacka.untitled.utitled_api.repositories.EvaluationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/avaliacao")
public class EvaluationController {

    @Autowired
    private EvaluationRepository evaluationRepo;

    @Autowired
    private CommentsRepository commentsRepo;

    Evaluation eval = new Evaluation();


    @GetMapping(value = "/{bairro}")
    public Evaluation getEvaluation(@PathVariable("bairro") String bairro) {

        System.out.println(String.format("GET /avaliacao/bairro : %s", bairro));


        return evaluationRepo.findByBairro(bairro);
    }

    @GetMapping(value = "/")
    public List<Evaluation> getEvaluation() {

        System.out.println("ok");

        return evaluationRepo.findAll();
    }

    @GetMapping(value = "/allComments")
    public List<Comments> getComment() {

        System.out.println("ok");
        return commentsRepo.findAll();
    }

    @PostMapping(value = "/insertComment")
    public Comments setComment(@RequestBody Comments comment){
        Comments com = new Comments();
        com.setComments_autor(comment.getComments_autor());
        com.setComments_date(comment.getComments_date());
        com.setComments_name(comment.getComments_name());
        com.setContent(comment.getContent());
        com.setPositive_negative(comment.getPositive_negative());
        commentsRepo.save(com);
        return com;
    }



}
