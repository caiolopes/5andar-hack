package com.hacka.untitled.utitled_api.model;

import jdk.nashorn.internal.parser.JSONParser;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;


public class Google {

    private RestTemplate rest;
    private HttpHeaders headers;
    private HttpStatus status;

    public Google() {
        this.rest = new RestTemplate();
        this.headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        headers.add("Accept", "*/*");
    }

    public String get(String bairro) {
        String url = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input="+ bairro +"&key=AIzaSyBpE_YblyPU_Go0N7YxLkmhwuYXg6SGDmU";
        HttpEntity<String> requestEntity = new HttpEntity<String>("", headers);
        ResponseEntity<String> responseEntity = rest.exchange(url, HttpMethod.GET, requestEntity, String.class);



       // this.setStatus(responseEntity.getStatusCode());

        JSONObject jsonObject = new JSONObject(responseEntity.getBody());
        JSONArray array = jsonObject.getJSONArray("predictions");
        jsonObject = array.getJSONObject(0);
        String pin = jsonObject.getString("description");
        //System.out.println(pin);
        return pin;
    }
}
