import Joi from 'joi'

const bannerSchame = Joi.object({
    title: Joi.string().min(2).required(),
    img: Joi.string().min(4).required()
})

const carSchema = Joi.object({
    title: Joi.string().min(4).required(),
    price: Joi.string().min(4).required(),
    color: Joi.string().min(4).required(),
    capacity: Joi.string().min(1).required(),
    img: Joi.string().min(3).required(),
    kuzov: Joi.string().min(3).required(),
})

export {
    bannerSchame,
    carSchema,
}