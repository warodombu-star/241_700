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
const mysql = require('mysql2/promise');
const app = express();
app.use(bodyParser.json());
const port = 8000;
/*
app.get('/testdb', (req, res) => {
    mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8700
    }).then((conn) => {
        conn
            .query('SELECT * FROM users')
            .then((result) => {
                res.json(result[0]);
            }).catch((err) => {
                ;
                res.json({ error: err.message });
            });
    })
})
*/
let conn = null;
const iniMySQL = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8700
    });
    console.log('Connected to MySQL database');
}

app.get('/users', async (req, res) => {
    const result = await conn.query('SELECT * FROM users');
    res.json(result[0]);
})

app.post('/users', async (req, res) => {
    try {
        let user = req.body;
        const result = await conn.query('INSERT INTO users SET ?', user);
        res.json({
            message: 'User added successfully',
            data: result[0]
        });
    } catch (error) {
        console.error('Error inserting user:', error);
        res.status(500).json({ message: 'Error addig user' });
    }
})

app.get('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const results = await conn.query('SELECT * FROM users WHERE id = ?', id);
        if (results[0].length === 0) {
            throw { statusCode: 404, message: 'User not found' };
        }
        res.json(results[0][0])
    } catch (error) {
        console.error('Error fetching user:', error);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: error.message || 'Error fetching user'
        });
    }
})

app.put('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let updateUser = req.body;
        const results = await conn.query('UPDATE users SET ? WHERE id = ?', [updateUser, id]);
        res.json({
            message: 'User updated succesfully',
            data: results[0]
        });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Error updating user' });
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const results = await conn.query('DELETE FROM users WHERE id = ?', id);
        res.json({
            message: 'User delete succesfully',
            data: results[0]
        })
    } catch (err) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Error deleting user' });
    }
})


/*app.get('/testdb-new', async (req, res) => {
    try {
        const conn = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'webdb',
            port: 8700
        });
        const result = await conn.query('SELECT * FROM users');
        res.json(result[0]);
    } catch (err) {
        console.error('Error connecting to the database:', err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});*/
/*
GET /users - ดึงข้อมูลผู้ใช้ทั้งหมด
POST /users - เพิ่มผู้ใช้ใหม่
GET /users/:id - ดึงข้อมูลผู้ใช้ตาม ID
PUT /users/:id - แก้ไข้ข้อมูลผู้ใช้ตาม ID ที่บันทึก
DELETE /users/:id - ลบผู้ใช้ตาม ID ที่บันทึก
*/
/*
let users = [];
let counter = 1;

app.get('/users', (req, res) =>{
    /*let user = {
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com"
    };
    /*res.send('Hello, World! test');*/
/* res.json(users);
});*/

app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter;
    counter += 1;
    users.push(user);
    res.json({
        message: 'User added successfully',
        user: user
    });
})

app.patch('/user/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    let selectedIndex = users.findIndex(user => user.id == id);
    //res.send(selectedIndex + '')
    //users[selectedIndex] = updateUser;
    //users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname;
    //users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname;

    if (updateUser.firstname) {
        users[selectedIndex].firstname = updateUser.firstname;
    }
    if (updateUser.lastname) {
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

app.delete('/users/:id', (req, res) => {
    let id = req.params.id;
    let selectedIndex = users.findIndex(user => user.id == id);
    users.splice(selectedIndex, 1);

    res.json({
        message: 'User deleted successfully',
        indexDelete: selectedIndex
    });
})

app.listen(port, async () => {
    await iniMySQL();
    console.log(`Server is running on http://localhost:${port}`);
});

