const express = require('express');
const dotenv = require('dotenv');
const { donnectDb, connectDB } = require('./src/db');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/graphql/schema')
const { authenticate } = require('./src/middleware/auth')
const cookieParser = require('cookie-parser')
const path = require('path');
const app = express();
const port = 3000

dotenv.config()

connectDB()

app.use(cookieParser())

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

app.use(express.urlencoded({ extended: true }))

require("./src/routes")(app);

app.listen(port, ()=>{
    console.log(`hello world app listening at port: ${port}`)
})

// Setting Templates
app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, '/src/templates/views'));

app.use(authenticate)

const user = {
    firstName: 'Dominic',
    lastName: 'Fiorelli'
}

//creating routes
app.get('/', (req, res) =>{
    res.render('views/index', {user:user})
})

app.get('/home', (req,res)=>{
    res.render('views/home')
})

app.get('/profile', (req,res)=>{
    res.render("views/profile")
})

// app.get('/login', (req,res)=>{
//     res.render("views/login")
// })

app.get('/register', (req,res)=>{
    res.render("views/register")
})

//using middleware
app.use((req,res,next) =>{
    console.log('TimeStamp:', Date())
    next()
})

//Accessing Static files with middleware
app.use(express.static(path.join(__dirname, 'public')))
