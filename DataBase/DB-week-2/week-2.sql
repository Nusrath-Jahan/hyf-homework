--Part 1: Working with task-------------------------------------------
use myfirstdb;
--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id);
--Change the title of a task
UPDATE task
SET title = 'Finalize Project Report'
WHERE id = 1;

--Change a task due date
UPDATE task
SET due_date = '2017-10-05'
where id = 1;

--Change a task status
UPDATE task 
SET status_id = 2
where id = 1;
--Mark a task as complete
SELECT t.title, s.name
FROM task t
LEFT JOIN status s
ON t.status_id = s.id
WHERE s.name = 'Done';

--Delete a task
DELETE FROM task
WHERE id = 33 AND description is NULL;


--Part 2: School database-----------------------------------
CREATE DATABASE SchoolHYF;
use SchoolHYF;

CREATE TABLE class(
    id int AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    begins DATE not NULL,
    ends DATE not null
);
CREATE TABLE student(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
name VARCHAR(100) not null,
email VARCHAR(100) NOT NULL,
phone VARCHAR(100) NOT NULL,
class_id INT,
Foreign Key (class_id) REFERENCES class(id)
);
INSERT INTO class (name, begins, ends)
VALUES ('Tom B. Erichsen', '2024-05-15', '2024-09-15');
INSERT INTO class (name, begins, ends)
VALUES ('Peterson', '2024-04-15', '2024-08-15');
INSERT INTO class (name, begins, ends)
VALUES ('Jonson', '2024-03-15', '2024-07-15');
INSERT INTO student (name, email, phone, class_id)
VALUES 
('Alice Smith', 'alice.smith@gmail.com', '45-982234', 1),
('Bob Johnson', 'bob.johnson@gmail.com', '45-982678', 2),
('Carol Williams', 'carol.williams@gmail.com', '45-988765', 3);

CREATE INDEX idx_student_name ON student(name);
--2nd ta kora hoini

ALTER TABLE class
ADD status VARCHAR(100) NOT NULL ;

INSERT into class(status)
VALUES('not-started', 'ongoing', 'finished');
ALTER TABLE class
ADD CONSTRAINT chk_class_status CHECK (status IN ('not-started', 'ongoing', 'finished'));

--Part 3: More queries--------------------------------------

use myfirstdb;

--Get all the tasks assigned to users whose email ends in @spotify.com
select task.title , user.email from task 
LEFT JOIN user ON task.user_id = user.id 
WHERE email LIKE '%@spotify.com';
--Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT t.title as All_Task
from task t 
LEFT JOIN user u on t.user_id = u.id
LEFT JOIN status s on t.status_id = s.id
WHERE u.name = 'Donald Duck' AND s.name = 'Not started';
--Get all the tasks for 'Maryrose Meadows' that were created in september 
SELECT t.title , u.name 
FROM task t
LEFT JOIN user u
ON t.user_id = u.id
WHERE u.name = 'Maryrose Meadows' and MONTH(t.created) = 9;
--Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT MONTH(created) AS Month, COUNT(*) AS All_Task
FROM task
GROUP BY MONTH(created)
ORDER BY MONTH(created);

SELECT  MONTHNAME(created) as Month, COUNT(*) AS All_Task
FROM task
GROUP BY MONTHNAME(created);



