const express = require('express');
const path = require('path');
const app = express();
const port = 3000

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
    res.send('home page')
})

app.get('/profile', (req,res)=>{
    res.send("Your Profile Here")
})

app.get('/login', (req,res)=>{
    res.send("Login Here")
})

app.get('/register', (req,res)=>{
    res.send("Register Here")
})

app.get('/user', (req,res)=>{
    res.send("User Page")
})

//using middleware
app.use((req,res,next) =>{
    console.log('TimeStamp:', Date())
    next()
})

//Accessing Static files with middleware
app.use(express.static(path.join(__dirname, 'public')))
