const express = require('express');
const dotenv = require('dotenv');
const { donnectDb, connectDB } = require('./src/db');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/graphql/schema')
const path = require('path');
const app = express();
const port = 3000

dotenv.config()

connectDB()

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(port, ()=>{
    console.log(`hello world app listening at port: ${port}`)
})

// Setting Templates
app.set('view engine', 'ejs')

const user = {
    firstName: 'Dominic',
    lastName: 'Fiorelli'
}

//creating routes
app.get('/', (req, res) =>{
    res.render('pages/index', {user:user})
})

app.get('/home', (req,res)=>{
    res.render('pages/home')
})

app.get('/profile', (req,res)=>{
    res.render("pages/profile")
})

app.get('/login', (req,res)=>{
    res.render("pages/login")
})

app.get('/register', (req,res)=>{
    res.render("pages/register")
})

//using middleware
app.use((req,res,next) =>{
    console.log('TimeStamp:', Date())
    next()
})

//Accessing Static files with middleware
app.use(express.static(path.join(__dirname, 'public')))
