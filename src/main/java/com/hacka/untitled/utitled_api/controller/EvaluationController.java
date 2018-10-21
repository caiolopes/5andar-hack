package com.hacka.untitled.utitled_api.controller;


import com.hacka.untitled.utitled_api.model.Comments;
import com.hacka.untitled.utitled_api.model.Evaluation;
import com.hacka.untitled.utitled_api.model.Google;
import com.hacka.untitled.utitled_api.repositories.CommentsRepository;
import com.hacka.untitled.utitled_api.repositories.EvaluationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
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

        String url = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input="+ bairro +"&key=AIzaSyBpE_YblyPU_Go0N7YxLkmhwuYXg6SGDmU";

        //RestTemplate restTemplate = new RestTemplate();
        Google go = new Google();

//       System.out.println(go.get(bairro).substring(0, go.get(bairro).indexOf("São")));
//       Evaluation j = evaluationRepo.findByBairro(go.get(bairro));
//       if (j == null){
//           eval.setBairro(go.get(bairro).substring( 0, go.get(bairro).indexOf(",")).toLowerCase());
//           evaluationRepo.save(eval);
//           return evaluationRepo.findByBairro(go.get(bairro).substring(0, go.get(bairro).indexOf(",")).toLowerCase());
//
//
//       }
//        evaluationRepo.findByBairro(go.get(bairro).substring( 0, go.get(bairro).indexOf(",")).toLowerCase());toLowerCase


        try {
            return evaluationRepo.findByBairro(go.get(bairro).substring(0, go.get(bairro).indexOf(",")).toLowerCase());
        }catch (NullPointerException e){
            System.out.println("chandler" + e.getMessage());
            return null;
        }
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
