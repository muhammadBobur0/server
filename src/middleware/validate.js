import { bannerSchame, carSchema } from "../utils/validation"

export default (req, res, next) => {
    try {
        if (req.url == '/cars' && req.method == 'POST') {
            let { error } = carSchema.validate(req.body)
            if (error) throw error
        }
        if (req.url == '/banner' && req.method == 'POST') {
            let { error } = bannerSchame.validate(req.body)
            if (error) throw error
        }

        return next()
    } catch (error) {
        res.status(400).json(
            {
                status: 400,
                message: error.message
            }
        )
    }
}