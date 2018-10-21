package com.hacka.untitled.utitled_api.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class Comments {

//    @Id
//    public ObjectId _id;

    public String content;
    public String comments_name;
    public String comments_autor;
    public String comments_date;
    public String positive_negative;

    public Comments() {
        super();
    }


//    public ObjectId get_id() {
//        return _id;
//    }
//
//    public void set_id(ObjectId _id) {
//        this._id = _id;
//    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }


    public String getComments_name() {
        return comments_name;
    }

    public void setComments_name(String comments_name) {
        this.comments_name = comments_name;
    }

    public String getComments_autor() {
        return comments_autor;
    }

    public void setComments_autor(String comments_autor) {
        this.comments_autor = comments_autor;
    }

    public String getComments_date() {
        return comments_date;
    }

    public void setComments_date(String comments_date) {
        this.comments_date = comments_date;
    }

    public String getPositive_negative() {
        return positive_negative;
    }

    public void setPositive_negative(String positive_negative) {
        this.positive_negative = positive_negative;
    }
}
