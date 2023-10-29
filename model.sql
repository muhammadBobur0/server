-- CAR
CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    title VARCHAR(128) NOT NULL,
    price INT NOT NULL, 
    color VARCHAR(12) NOT NULL, 
    capacity int NOT NULL, 
    img TEXT NOT NULL, 
    kuzov VARCHAR(32) NOT NULL
);

-- GET ALL
SELECT * FROM cars;

-- GET BY ID
SELECT * FROM cars WHERE id = 1;

-- CREATE CAR
INSERT INTO cars(title, price, color, capacity, img, kuzov) VALUES ('CAPTIVA_4', '750000', 'black', '4', 'okokokok', 'temir');
INSERT INTO cars(title, price, color, capacity, img, kuzov) VALUES('{title}', '{price}', '{color}', '{capacity}', '{img}', '{kuzov}');

-- PUT CAR
UPDATE cars SET title  = 'GM Uzbekistan', price = '0000', color = 'black', capacity = '4', kuzov = 'metall', img = 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Uzauto-motors-logo.jpg';

-- DELETE CAR
DELETE FROM cars WHERE id = 2 

-- BANNER
CREATE TABLE banner (
    banner_id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    img TEXT NOT NULL
);

-- GET ALL
SELECT * FROM banner;

-- GET BY ID
SELECT * FROM banner WHERE banner_id = id;

-- CREATE BANNER
INSERT INTO banner(title, img) VALUES ('Mercedes', 'https://car4you.uz/swipe.png');

-- PUT BANNER
UPDATE banner SET title = 'Mers', img = 'https://car4you.uz/swipe.png' WHERE banner_id = id;

-- DELETE BANNER
DELETE FROM banner WHERE banner_id = id;