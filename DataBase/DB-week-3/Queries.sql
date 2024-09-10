---------------------------Queries from Meal------------
USE Meal_Sharing_Website;
--Get all meals
SELECT * FROM Meal;
--Add a new meal
INSERT INTO Meal (title, description, location,`when`, max_reservations, price, created_date)
VALUES (
    'Pizza', 
    'A kebab and chicken pizza with mushroom, onion and extra cheese',
    'Copenhagen',
    '2024-09-11 20:00:00',  
    100,
    89,
    CURDATE()
);
INSERT INTO Meal (title, description, location,`when`, max_reservations, price, created_date)
VALUES (
    'Pasta', 
    'Pasta with tomato, chicken and onion ',
    'Copenhagen',
    '2024-09-12 20:00:00',  
    50,
    120,
    CURDATE()
);
INSERT INTO Meal (title, description, location,`when`, max_reservations, price, created_date)
VALUES (
    'Pasta', 
    'Pasta with tomato, chicken and onion ',
    'Copenhagen',
    '2024-09-12 20:00:00',  
    50,
    120,
    CURDATE()
);
--Get a meal with any id, fx 1
SELECT * FROM Meal where id = 1;
--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal 
SET title = 'Cheesy Pasta',
    price = 100
    WHERE id = 2;
--Delete a meal with any id, fx 1
DELETE FROM Meal WHERE id = 3;
---------------------------Queries from Reservation-----------------
--Get all reservations
SELECT * FROM Reservation;
--Add a new reservation
INSERT INTO Reservation(number_of_guests,meal_id,created_date,contact_phonenumber,contact_email,contact_name) 
                VALUES (2, 1, CURDATE(), '915826656',  'shabbir@gmail.com','Shabbir Ahammed');
INSERT INTO Reservation(number_of_guests,meal_id,created_date,contact_phonenumber,contact_email,contact_name) 
                VALUES (2, 1, CURDATE(), '915826656', 'shabbir@gmail.com','Shabbir Ahammed');


--Get a reservation with any id, fx 1
SELECT * FROM reservation where id = 1;
--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET meal_id = 2,
    number_of_guests = 3
WHERE id = 1;
--Delete a reservation with any id, fx 1
DELETE FROM reservation WHERE id = 2;
--------------------------------Queries For Review---------------
--Get all reviews
SELECT * from review;
--Add a new review

INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ('Soooo Good!!!!',
        'The meal was really delicious.',
        2,
        5,
        CURDATE());
--Get a review with any id, fx 1
SELECT meal_id, title, description FROM review WHERE id = 1;
--Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET description = 'The meal was really delicious.It was too good'
WHERE id = 1;
--Delete a review with any id, fx 1
DELETE FROM review WHERE id = 2;
