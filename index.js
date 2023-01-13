
/*Tools: code editor, browser, command line utility, 
application and server utility, API platform
*/
const express = require('express');
const app = express();
app.get('/', (req,res)=>{
    res.send('Hello there');
});

const courses = [
    {id: 1, name:'Web Development'},
    {id:2, name: 'IT'},
    {id:3, name: 'Cybersecurity'},
];

//=========== ROUTES FOR HTTP GET REQUESTS ==========
app.get('/api/courses',(req,res)=>{
    res.send(courses);
});



//=========== ROUTES FOR HTTP POST REQUESTS ==========
app.get('/api/courses:id',(req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course)
    {
        res.status(404).send("The course with the given ID was not found");
        return
    }
        res.send(course);
})
app.listen(3000, () => {
    console.log('Listening on por 3000...')
})




//=========== ROUTES FOR HTTP PUT REQUESTS ==========
app.put('/api/courses/:id', (req,res)=>{
        if(req)
        {
            console.log(err);
            response.writeHead(404,{"Content-Type": "text/html"});
        }
        else
        {
            response.writeHead(200,{"Content-Type": "text/html"});
            response.write(res.toString())
        }
        response.end();
    });
    
    



//=========== ROUTES FOR HTTP DELETE REQUESTS ==========
app.delete('/api/courses/:id', (req,res)=>{
    //code the following logic
    //look up the course by id
        //return 404 if does not exist
        //delete the course by index HINT: use the indexOf() and splice() methods
        // return the response to the client the course that was deleted


});

