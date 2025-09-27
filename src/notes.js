const express = require('express');
//create express app
const app = express();
//Question whatever req comes like /hello, /signun etc same res is sent how to handle it? you need to handle "/" route
//if req comes to /hello it will not be handled
//if req comes to / it will be handled
// Answer: app.use((req,res)=> {
//     res.send('Hello World');
// })

//heello wont work  with this only / anythis that matches with / will work
//to handle /hello also
//http://localhost:3000/hello/909 it will still work try changing order

app.use("/hello/2", (req,res)=> {
    res.send('Hello from bee express server');
})

app.use("/hello", (req,res)=> {
    res.send('Hello from manju express server');
})

// app.use("/", (req,res)=> {
//     res.send('Hello from only / server');
// })

app.get("/user/:userId", (req,res)=> {
    console.log(req.params); //{ userId: '909' }
    res.send({
        name: 'manju',
        age: 24,
        city: 'Bangalore'
    });
});

app.post("/user", (req,res)=> {
    res.send('Post request to /user');
});

// Correct usage example for the pattern you asked about:
// Common mistake that throws a SyntaxError:
//    app.get("/ab?c)                // <-- missing closing quote and comma
// The correct form must include a quoted path string, a comma, then the handler:
// Use a RegExp route to avoid path-to-regexp parsing issues with raw '?' characters.
// This matches both '/ac' and '/abc' because the '?' in the regexp makes 'b' optional.
app.get(/^\/ab+c$/, (req, res) => {
    res.send('Matched /ac or /abc');
});




app.listen(3001, ()=> {
    //only prints if server is created succesfully
    console.log('Server is running on port 3001');
});
