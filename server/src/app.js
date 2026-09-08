import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import connectDatabase from './config/database.js'
import authRoutes from './routers/authRoutes.js'
import ticketRoutes from './routers/ticketRoutes.js'

dotenv.config()

connectDatabase()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/tickets', ticketRoutes)

app.get('/', (req, res) => {
  return res.json({
    message: 'HelpDesk API funcionando corretamente'
  })
})

export default app