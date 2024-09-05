CREATE DATABASE employee_management;
SET NAMES utf8mb4;
USE employee_management;
--Create Staff Table
CREATE table staff (
    staff_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    family_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    phone VARCHAR(20)
);
-- Create Offices table
CREATE Table offices (
    office_id INT AUTO_INCREMENT PRIMARY KEY,
    office_name VARCHAR(100) not NULL,
    location VARCHAR(200) NOT NULL
);
--Create Job Titles Table
CREATE Table job_titles (
    job_title_id INT AUTO_INCREMENT PRIMARY KEY,
    job_title_name VARCHAR(100) NOT NULL
);
--Create Staff_Offices Table(Many-to-Many Relationship)
CREATE Table staff_offices (
    staff_id INT,
    office_id int,
    PRIMARY KEY(staff_id, office_id),
    Foreign Key (staff_id) REFERENCES staff(staff_id) on Delete CASCADE,
    Foreign Key (office_id) REFERENCES offices(office_id) On Delete CASCADE
);
--Create Staff-JobTitle Table(Many to Many Relationship)
USE employee_management;
CREATE TABLE staff_jobTitles (
    staff_id INT,
    job_title_id INT,
    PRIMARY KEY (staff_id, job_title_id),
    FOREIGN KEY (staff_id) REFERENCES staff(staff_id) ON DELETE CASCADE,
    FOREIGN KEY (job_title_id) REFERENCES job_titles(job_title_id) ON DELETE CASCADE
);

INSERT INTO staff (first_name, family_name, email, phone)
VALUES
('John', 'Doe', 'john.doe@example.com', '555-1234'),
('Jane', 'Smith', 'jane.smith@example.com', '555-5678'),
('Alice', 'Johnson', 'alice.j@example.com', '555-4321'),
('Bob', 'Williams', 'bob.williams@example.com', '555-8765');

INSERT INTO offices (office_name, location)
VALUES
('Head Office', 'New York'),
('Branch Office 1', 'Los Angeles'),
('Branch Office 2', 'Chicago'),
('Regional Office', 'Houston');

INSERT INTO job_titles (job_title_name)
VALUES
('Manager'),
('Sales Representative'),
('Technician'),
('Administrator');

INSERT INTO staff_offices (staff_id, office_id)
VALUES
(1, 1),  -- John Doe works in Head Office
(2, 2),  -- Jane Smith works in Branch Office 1
(1, 3),  -- John Doe also works in Branch Office 2
(3, 4),  -- Alice Johnson works in Regional Office
(4, 1);  -- Bob Williams works in Head Office
INSERT INTO staff_jobTitles (staff_id, job_title_id)
VALUES
(1, 1),  -- John Doe is a Manager
(2, 2),  -- Jane Smith is a Sales Representative
(1, 3),  -- John Doe is also a Technician
(3, 4),  -- Alice Johnson is an Administrator
(4, 3);  -- Bob Williams is a Technician
