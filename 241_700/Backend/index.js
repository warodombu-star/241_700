//ทำการ import โมดุล http
/*
const http = require('http');
const host = 'localhost';
const port = 8000;

//กำหนดค่า server

const requestListener = function(req,res){
    res.writeHead(200);
    res.end("Hello, World! This is my first server")
}

//รัน server
const server = http.createServer(requestListener);
server.listen(port,host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})*/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const port = 8000;

/*
GET /users - ดึงข้อมูลผู้ใช้ทั้งหมด
POST /users - เพิ่มผู้ใช้ใหม่
GET /users/:id - ดึงข้อมูลผู้ใช้ตาม ID
PUT /users/:id - แก้ไข้ข้อมูลผู้ใช้ตาม ID ที่บันทึก
DELETE /users/:id - ลบผู้ใช้ตาม ID ที่บันทึก
*/

let users = [];
let counter = 1;

app.get('/users', (req, res) =>{
    /*let user = {
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com"
    };
    /*res.send('Hello, World! test');*/
    res.json(users);
});

app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter;
    counter+=1;
    users.push(user);
    res.json({
    message: 'User added successfully',
    user: user
    });
})

app.patch('/user/:id', (req,res) =>{
    let id = req.params.id;
    let updateUser = req.body;
    let selectedIndex = users.findIndex(user => user.id == id);
    //res.send(selectedIndex + '')
    //users[selectedIndex] = updateUser;
    //users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname;
    //users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname;

    if(updateUser.firstname){
        users[selectedIndex].firstname = updateUser.firstname;
    }
    if(updateUser.lastname){
        users[selectedIndex].lastname = updateUser.lastname;
    }

    res.json({
        message: 'User update successfully',
        data: {
            user: updateUser,
            indexUpdate: selectedIndex
        }
    });
    // res.send(id)
})

/*app.put('/user/:id', (req,res) =>{
    let id = req.params.id;
    let updateUser = req.body;
    let selectedIndex = users.findIndex(user => user.id == id);
    //res.send(selectedIndex + '')
    //users[selectedIndex] = updateUser;
    users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname;
    users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname;
    res.json({
        message: 'User update successfully',
        data: {
            user: updateUser,
            indexUpdate: selectedIndex
        }
    });
    // res.send(id)
})*/

app.delete('/users/:id', (req,res) => {
    let id = req.params.id;
    let selectedIndex = users.findIndex(user => user.id == id);
    users.splice(selectedIndex,1);
    
    res.json({
        message: 'User deleted successfully',
        indexDelete: selectedIndex
    });
})

app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`);
});

