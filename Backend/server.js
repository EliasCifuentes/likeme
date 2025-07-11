import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import postRoute from './routes/postRoute.js'
import { errorHandler } from './src/middlewares/errorHandler.js'

const app = express()
const PORT = process.env.PORT ?? 5000

//Middleware
app.use(express.json())
app.use(cors())
app.use(postRoute)

// Middleware de errores global
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server conecting on http://localhost:${PORT}`)
})