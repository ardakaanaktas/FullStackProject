package com.codeWithArjun.fullstackbackend.model;

import jakarta.persistence.*;

@Entity
public class Customer {
    @Id
    @SequenceGenerator(name = "customer_seq",sequenceName = "customer_seq",allocationSize = 1)
    @GeneratedValue(generator = "customer_seq",strategy = GenerationType.SEQUENCE)
    private Long id;
    private String name;
    private String lastName;
    private Integer age;
    private String email;
    private String userName;
    private String address;
}
