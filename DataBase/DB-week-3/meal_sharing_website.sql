CREATE DATABASE Meal_Sharing_Website;
USE Meal_Sharing_Website;
CREATE Table Reservation (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
number_of_guests int ,
meal_id INT,
 created_date date,
 contact_phonenumber VARCHAR(20),
 contact_name VARCHAR(255),
 contact_email VARCHAR(100),
 Foreign Key (meal_id) REFERENCES Meal(id)
);
CREATE Table Meal (
    id INT AUTO_INCREMENT PRIMARY key,
    title VARCHAR(250),
    description TEXT,
    location VARCHAR(250),
    `when` DATETIME,
    max_reservations INT,
    price DECIMAL,
    created_date DATE
);
CREATE Table Review(
    id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title varchar(300),
 description text,
 meal_id int,
 stars int,
 created_date date,
 Foreign Key (meal_id) REFERENCES Meal(id)
);





