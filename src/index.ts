import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()

app.use(cors({
  credentials: true
}));

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)

server.listen(8080, () => {
  console.log("Server running on http://localhost:8080/")
})

const MONG_URL = 'mongodb+srv://admin:M7yew5rCNgMGxc3T@api-rest.rellvsj.mongodb.net/?retryWrites=true&w=majority'

mongoose.Promise = Promise
mongoose.connect(MONG_URL)
mongoose.connection.on('error', (error: Error) => console.log(error))