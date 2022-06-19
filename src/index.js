import express from 'express'
import ejs from 'ejs'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'
import routes from './routes/index.js'

const __dirname=dirname(fileURLToPath(import.meta.url))
const app= express()


app.set('views',join(__dirname,'views'))
app.set('view engine','ejs' ) // configuracion para usar el motor de plantilla ejs para crear html

app.use(express.static(join(__dirname,'public'))) //esta forma configuro express para que tenga una carpera estatica
console.log(join(__dirname,'public'))
app.use(routes)

app.listen(process.env.PORT || 3000, ()=>{console.log("puerto escuchando en el 3000")})