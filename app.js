const express = require('express');
const dotenv = require('dotenv');
const { donnectDb, connectDB } = require('./src/db');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/graphql/schema')
const { authenticate } = require('./src/middleware/auth')
const cookieParser = require('cookie-parser')
const { userData } = require('./src/middleware/userData')
const path = require('path');

dotenv.config()
const app = express();

connectDB()
app.use(cookieParser())
app.use(authenticate)


app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

app.use(express.urlencoded({ extended: true }))
app.use(userData)

require("./src/routes")(app);


// Setting Templates
app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, '/src/templates/views'));

    
    //using middleware
app.use((req,res,next) =>{
    console.log('TimeStamp:', Date())
    next()
})

//Accessing Static files with middleware
app.use(express.static(path.join(__dirname, 'public')))

app.listen(process.env.PORT, ()=>{
    console.log(`hello world app listening at port: ${process.env.PORT}`)
})