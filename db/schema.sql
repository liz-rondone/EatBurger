CREATE DATABASE cupcake_db;
USE cupcake_db;

CREATE TABLE cupcakes
(
    id int NOT NULL AUTO_INCREMENT,
    cupcake_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    date TIMESTAMP,
    PRIMARY KEY (id)
);