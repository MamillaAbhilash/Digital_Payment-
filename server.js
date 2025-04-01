//import the express module 

const express=require('express')

const app=express()

const port=3000

//startv the server for making it listen on the specified port
app.listen(port ,() => {
    console .log('server is running on port ${port}');

}
);