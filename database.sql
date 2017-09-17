DROP DATABASE IF EXISTS agrodataDB;
CREATE DATABASE agrodataDB;

\c agrodataDB;

CREATE TABLE AppUsers (
  ID SERIAL PRIMARY KEY,
  uname VARCHAR,
  uemail VARCHAR,
  uphone VARCHAR,
  upassword VARCHAR,
  uRatingScore FLOAT,
  uTimesRated INTEGER
);

INSERT INTO AppUsers (uname, uemail, uphone, upassword,uRatingScore,uTimesRated)
  VALUES ('Juan Del Pueblo', 'juan.pueblo@gmail.com', '787-888-8888','bobo',0,0);