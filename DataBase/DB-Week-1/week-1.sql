-- Active: 1724566794618@@localhost@3306@myfirstdb

--1.Find out how many tasks are in the task table
SELECT count(*) AS total_tasks FROM task ;
 
--2.Find out how many tasks in the task table do not have a valid due date

SELECT COUNT(*) AS Invalid_due_date from task where due_date IS NULL;

--3.Find all the tasks that are marked as done
SELECT t.title, s.name
FROM task t
JOIN status s ON t.status_id = s.id
WHERE s.name = 'Done';

--4.Find all the tasks that are not marked as done
SELECT t.title, s.name
from task t
join status s ON t.status_id = s.id
WHERE s.name != "Done";

--5.Get all the tasks, sorted with the most recently created first
select created, title
from task 
ORDER BY created DESC;

--6.Get the single most recently created task

SELECT title, created
from task 
ORDER BY created DESC LIMIT 1;

--7.Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date
FROM task 
WHERE title LIKE '%database%' or description LIKE '%database%';

--8.Get the title and status (as text) of all tasks
SELECT title, status.name AS status FROM task JOIN status ON task.status_id = status.id;

--9.Get the name of each status, along with a count of how many tasks have that status

SELECT s.name AS status_name, COUNT(t.status_id) as task_count
FROM status s 
LEFT JOIN task t 
on s.id = t.status_id  
GROUP BY s.name;

--10.Get the names of all statuses, sorted by the status with most tasks first
select s.name AS Status, t.created AS Created, t.title AS Task 
from status s 
LEFT JOIN task t 
ON s.id = t.status_id
ORDER BY created DESC;