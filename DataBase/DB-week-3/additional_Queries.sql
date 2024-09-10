----------------------------Additional queries

--added a couple of different meals, reservations and reviews with different attributes
USE Meal_Sharing_Website;
INSERT INTO Meal (title, description, location,`when`, max_reservations, price, created_date)
VALUES (
    'Pita brød', 
    'kebab or chicken with mayonnaise and salad ',
    'Copenhagen',
    '2024-09-09 15:00:00',  
    100,
    40,
    CURDATE()
),(
    'Falafel', 
    'kebab or chicken with mayonnaise and salad ',
    'Copenhagen',
    '2024-09-10 18:00:00',  
    100,
    60,
    CURDATE()
),
(
    'Shik Kebar', 
    'Beef or chicken with mayonnaise, salad ',
    'Copenhagen',
    '2024-09-01 14:00:00',  
    100,
    110,
    CURDATE()
)
;
USE Meal_Sharing_Website;
INSERT INTO reservation (number_of_guests,meal_id,created_date,contact_phonenumber,contact_email,contact_name) 
                VALUES 
                (8, 4, CURDATE(), '915826656', 'Progga@gmail.com', 'Progga Peromita'),
                (5, 6, CURDATE(), '915656656', 'Fariha@gmail.com','Fariha Salah'),
                (2, 5, CURDATE(), '915826656', 'Joti@gmail.com', 'Joti Kormokar');

INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ('Good Food!!!!',
        'Really delicious.',
        4,
        4,
        CURDATE()),
        ('Not Bad',
        'It could have been better.',
        6,
        2,
        CURDATE()),
('I love the meal',
        'The meal was really delicious.',
        5,
        5,
        CURDATE())
        ;
---------------------------------Functionality

--Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal where price <= 90;
--Get meals that still has available reservations
    SELECT m.id, m.title, m.max_reservations, COALESCE(reserved_count, 0) AS reserved_count
FROM Meal m
         LEFT JOIN (SELECT meal_id, COUNT(*) as reserved_count
                    FROM Reservation
                    GROUP BY meal_id) r ON m.id = r.meal_id
WHERE COALESCE(reserved_count, 0) < m.max_reservations;
--Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT title FROM meal WHERE title LIKE 'Rød grød med%';
--Get meals that has been created between two dates
SELECT * FROM meal where created_date BETWEEN '2024-09-09' AND '2024-09-08';
--Get only specific number of meals fx return only 5 meals
SELECT * FROM meal LIMIT 5;
--Get the meals that have good reviews
SELECT m.title, r.title, r.description, r.stars FROM review r LEFT JOIN meal m
ON r.meal_id = m.id  WHERE r.stars >=4 ;
--Get reservations for a specific meal sorted by created_date
SELECT * FROM reservation WHERE id = 1 ORDER BY created_date DESC;

--Sort all meals by average number of stars in the reviews
SELECT m.title, ROUND(AVG(r.stars)) as review FROM meal m 
LEFT JOIN review r on m.id = r.meal_id 
GROUP BY m.id
ORDER BY review DESC;