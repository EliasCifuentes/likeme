import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import postRoute from './routes/postRoute.js'

const app = express()
const PORT = process.env.PORT ?? 5000

app.use(express.json())
app.use(cors())
app.use(postRoute)

app.listen(PORT, () => {
    console.log(`Server conecting on http://localhost:${PORT}`)
})