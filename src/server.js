// IMPORTS
import express from 'express'
import { PORT } from './config.js'
import modules from './modules/index.js'
import cors from 'cors'
import fileUpload from 'express-fileupload'

// EXPRESS
let app = express()

// APP USE
app.use(express.json())
app.use(fileUpload())
app.use(cors())
app.use(modules)

// APP LISTEN
app.listen(PORT, () => console.log('http://localhost:' + PORT))