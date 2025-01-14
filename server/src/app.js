import express from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import userRouter from './routes/userRouter.js'
import authRouter from './routes/authRouter.js'
import roomRouter from './routes/bookingRouter.js'
dotenv.config()
const app = express()

app.use(express.json())
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/rooms', roomRouter)

const port = process.env.PORT || 5100
app.listen(port, () => {
  console.log(`server running on PORT ${port}....`)
})