CREATE TABLE A01418743_user (
  ID int NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(50),
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email_address NVARCHAR(50),
  password NVARCHAR(50),
  PRIMARY KEY (ID)
);

-- 1:1 with user table/entity
CREATE TABLE A01418743_user_timeline (
  ID int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  date_of_post DATE,
  description NVARCHAR(300),
  time_of_post TIME,
  view_count int,
  PRIMARY KEY(ID),
  FOREIGN KEY (user_id) REFERENCES A01418743_user(ID)
);

INSERT INTO A01418743_user (ID, user_name, first_name, last_name, email_address, password) VALUES (1, 'DangerousBoi', 'Hayden', 'Baek', 'dangerousBoi123@gmail.com', 'Hello123!');



INSERT INTO A01418743_user_timeline (ID, user_id, date_of_post, description, time_of_post, view_count) 
VALUES 
(2, 1, '2024-11-1', 'It has gotten better, but much more to improve', '08:12:01', 77),
(3, 1, '2024-10-20', 'The worst movie website I have seen in my life', '10:10:10', 20);