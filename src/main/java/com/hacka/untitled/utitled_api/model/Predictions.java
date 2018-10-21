package com.hacka.untitled.utitled_api.model;

public class Predictions {

    String description;

    public Predictions() {
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Predictions{" +
                "description='" + description + '\'' +
                '}';
    }
}
