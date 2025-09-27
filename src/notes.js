const express = require('express');
//create express app
const app = express();
//Question whatever req comes like /hello, /signun etc same res is sent how to handle it? you need to handle "/" route
//if req comes to /hello it will not be handled
//if req comes to / it will be handled
// Answer: app.use((req,res)=> {
//     res.send('Hello World');
// })

app.use("/hello", (req,res)=> {
    res.send('Hello from manju express server');
})


app.listen(3000, ()=> {
    //only prints if server is created succesfully
console.log('Server is running on port 3000');
});
