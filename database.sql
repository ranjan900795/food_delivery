CREATE DATABASE food_delivery;


CREATE TABLE users(
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    number VARCHAR(10) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);	

ALTER TABLE users
	ADD address VARCHAR(255) NOT NULL;
        
CREATE TABLE restaurant(
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    area VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);	        
        
        
CREATE TABLE restaurant_orders (
    id INT NOT NULL AUTO_INCREMENT,
    orders_id INT NOT NULL,
    restaurant_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(orders_id) REFERENCES orders(id),
    FOREIGN KEY(restaurant_id) REFERENCES restaurant(id)
); 

CREATE TABLE orders (
	id INT NOT NULL AUTO_INCREMENT,
	date DATE NOT NULL,
	users_id INT NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(users_id) REFERENCES users(id)	
);      

INSERT INTO restaurant
    VALUES(1,"Kaleidoscope Restaurant","Parnasree");
    
INSERT INTO restaurant
    VALUES(2,"Rang De Basanti Dhaba","New Town");

INSERT INTO restaurant
    VALUES(3,"Kasturi Restaurant","Jadavpur");

INSERT INTO restaurant
    VALUES(4,"The Palm-Pan Asia","Central Kolkata");

INSERT INTO restaurant
    VALUES(5,"The Bikers Cafe","Park Street");

INSERT INTO restaurant
    VALUES(6,"Baskin Robbins","Elgin");

INSERT INTO restaurant
    VALUES(7,"The Cream And Fudge Factory","Ballygunge");
