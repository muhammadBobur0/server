import { fetch, fetchAll } from "../../utils/db.js";

let getAllCars = async () => {
  return await fetchAll("SELECT * FROM cars ORDER BY id ASC");
};

let getByIdCar = async (id) => {
  return await fetch("SELECT * FROM cars WHERE id = $1", [id]);
};

const createCar = async ({ title, price, color, capacity, kuzov }, img, id) => {
  console.log(title, price, color, capacity, kuzov);
  return await fetch(
    `INSERT INTO cars(title, price, color, capacity, kuzov, img) VALUES (${title}, ${price}, ${color}, ${capacity},  ${kuzov}, 'asdasdasdasdasd') returning *`
  );
};

const putCar = async ({ title, price, color, capacity, kuzov }, img, id) => {
  return await fetch(
    `
    UPDATE cars
        SET title = $1,
        price = $2,
        color = $3,
        capacity = $4,
        kuzov = $5,
        img = $6 
    WHERE id = $7 returning *
`,
    [title, price, color, capacity, kuzov, img, id]
  );
};

const deleteCarWithId = async(id) => {
  return await fetch('DELETE FROM cars WHERE id = $1 returning *', [id])
}

export { getAllCars, getByIdCar, createCar, putCar, deleteCarWithId };
