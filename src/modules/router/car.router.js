import { Router } from "express";
import { getCars, postCar, editCar, getById, deleteCar } from '../controller/car.controller.js'
const router = Router()

router.get('/cars', getCars)
router.get('/cars/:id', getById)
router.post('/cars', postCar)
router.put('/cars/:id', editCar)
router.delete('/cars/:id', deleteCar)

export default router