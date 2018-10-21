package com.hacka.untitled.utitled_api.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

public class Evaluation {

//    @Id
//    public ObjectId _id;


    public String bairro;
    public String vida_noturna = "55";
    public String seguranca = "65";
    public String ruidos_diurno = "70";
    public String ruidos_noturno = "80";
    public String criancas = "90";
    public String jovens = "56";
    public String idosos = "49";
    public String mov_veiculos = "33";
    public String tipo_bairro_residencial = "76";
    public String tipo_bairro_comercio = "15";
    public String lazer = "99";
    public String name;




    // Constructors
    public Evaluation() {
        super();
    }

    public Evaluation(String bairro) {
        this.bairro = bairro;
    }

//    public ObjectId get_id() {
//        return _id;
//    }
//
//    public void set_id(ObjectId _id) {
//        this._id = _id;
//    }



    public String getVida_noturna() {
        return vida_noturna;
    }

    public void setVida_noturna(String vida_noturna) {
        this.vida_noturna = vida_noturna;
    }

    public String getSeguranca() {
        return seguranca;
    }

    public void setSeguranca(String seguranca) {
        this.seguranca = seguranca;
    }

    public String getRuidos_diurno() {
        return ruidos_diurno;
    }

    public void setRuidos_diurno(String ruidos_diurno) {
        this.ruidos_diurno = ruidos_diurno;
    }

    public String getRuidos_noturno() {
        return ruidos_noturno;
    }

    public void setRuidos_noturno(String ruidos_noturno) {
        this.ruidos_noturno = ruidos_noturno;
    }

    public String getCriancas() {
        return criancas;
    }

    public void setCriancas(String criancas) {
        this.criancas = criancas;
    }

    public String getJovens() {
        return jovens;
    }

    public void setJovens(String jovens) {
        this.jovens = jovens;
    }

    public String getIdosos() {
        return idosos;
    }

    public void setIdosos(String idosos) {
        this.idosos = idosos;
    }

    public String getMov_veiculos() {
        return mov_veiculos;
    }

    public void setMov_veiculos(String mov_veiculos) {
        this.mov_veiculos = mov_veiculos;
    }

    public String getTipo_bairro_residencial() {
        return tipo_bairro_residencial;
    }

    public void setTipo_bairro_residencial(String tipo_bairro_residencial) {
        this.tipo_bairro_residencial = tipo_bairro_residencial;
    }

    public String getTipo_bairro_comercio() {
        return tipo_bairro_comercio;
    }

    public void setTipo_bairro_comercio(String tipo_bairro_comercio) {
        this.tipo_bairro_comercio = tipo_bairro_comercio;
    }

    public String getLazer() {
        return lazer;
    }

    public void setLazer(String lazer) {
        this.lazer = lazer;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getName() {

        return bairro;
    }

    public void setName(String name) {
        this.bairro = name;
    }

}
