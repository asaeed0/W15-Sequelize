CREATE DATABASE pizza_db;

USE pizza_db;

CREATE TABLE pizzas (
	pizza_id INT PRIMARY KEY AUTO_INCREMENT,
    pizza_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN
);