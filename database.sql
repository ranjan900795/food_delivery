CREATE TABLE users(
		id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        PRIMARY KEY(id)
        );	
        
CREATE TABLE resturant(
		id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        phone ID NOT NULL,
        PRIMARY KEY(id)
        );	        
        
        
CREATE TABLE user_orders (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    resturant_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(resturant_id) REFERENCES resturant(id)
);        
