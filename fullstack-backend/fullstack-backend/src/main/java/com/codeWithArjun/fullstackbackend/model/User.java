package com.codeWithArjun.fullstackbackend.model;

import jakarta.persistence.*;


@Entity
public class User {
    @Id
    @SequenceGenerator(name = "user_seq",sequenceName = "user_seq",allocationSize = 1)
    @GeneratedValue(generator = "user_seq",strategy = GenerationType.SEQUENCE)
    private Long id;
    private String userName;
    private String name;
    private String email;

    //Getter fields
    public Long getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    //Setter fields
    public void setId(Long id) {
        this.id = id;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
