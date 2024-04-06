import express from 'express'
import router from './app.routes.js'
import cors from 'cors'
import { requestLog } from './middlewares/logs.middleware.js'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', requestLog, router)
app.get('/', (req, res) => {res.status(200).send('APP runing')})

app.listen(port, () => console.log(`ACL listening on port ${port}!`))
