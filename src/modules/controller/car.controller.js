import {
  createCar,
  deleteCarWithId,
  getAllCars,
  getByIdCar,
  putCar,
} from "../model/car.model.js";
import path from 'path'
let getCars = async (req, res) => {
  try {
    let cars = await getAllCars();

    res.json(cars);
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
};

const getById = async (req, res) => {
  let { id } = req.params;
  try {
    let [getCar] = await getByIdCar(id);
    console.log(getCar);
    if (getCar) {
      return res.status(200).json({
        message: "SUCCES",
        status: 200,
        data: getCar,
      });
    }

    res.status(404).json({
      status: 404,
      message: "car not found",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      status: 400,
    });
  }
};

let postCar = async (req, res) => {
  let { title, price, color, capacity, kuzov } = req.body;
  console.log(title, price, color, capacity, kuzov);
  let { avatar } = req.files;

  try {
    let fileName = Date.now() + avatar.name.replace(/\s/g, "");
    avatar.mv(path.resolve("uploads", fileName));
    let postCar = await createCar(title, price, color, capacity, kuzov);

    res.status(201).json({
      status: 201,
      message: "SUCCES CREATED",
      img: fileName,
      data: postCar,
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
};

const editCar = async (req, res) => {
  let id = req.params.id;
  let { avatar } = req.files;
  try {
    let avaName = avatar.name;

    let [car] = await putCar(req.body, avaName, id);

    console.log(car);

    if (car) {
      res.status(200).json({
        status: 200,
        message: "CAR SUCCES EDITED",
        data: car,
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: "EDIT CAR FAILED",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
};

const deleteCar = async (req, res) => {
  let id = req.params.id;

  try {
    console.log(id);
    const [delCar] = await deleteCarWithId(id);

    if (delCar) {
      return res.status(200).json({
        status: 200,
        message: "CAR SUCCES DELETED",
        data: delCar,
      });
    }

    if (!delCar) {
      console.log("ok");
      return res.status(400).json({
        status: 400,
        message: "CAR NOT FOUND",
      });
    }

    res.status(400).json({
      status: 400,
      message: "CAR DELETE FAILED",
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
};

export { getCars, getById, postCar, editCar, deleteCar };
