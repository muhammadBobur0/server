import { Router } from "express";
import { bannerGet, bannerbyId, bannerPost, bannerPut, bannerDelete } from "../controller/banner.controller.js";

const router = Router()

router.get('/banner', bannerGet)
router.get('/banner/:id', bannerbyId)
router.post('/banner', bannerPost)
router.put('/banner/:id', bannerPut)
router.delete('/banner/:id', bannerDelete)
export default router

