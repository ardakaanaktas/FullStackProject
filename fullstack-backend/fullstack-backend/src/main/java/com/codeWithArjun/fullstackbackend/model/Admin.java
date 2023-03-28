package com.codeWithArjun.fullstackbackend.model;

import jakarta.persistence.*;

@Entity
public class Admin {

    @Id
    @SequenceGenerator(name = "admin_seq",sequenceName = "admin_seq",allocationSize = 1)
    @GeneratedValue(generator = "admin_seq",strategy = GenerationType.SEQUENCE)
    private Long id;
    private String userName;
    private String name;
    private String email;
}
