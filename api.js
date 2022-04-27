const client = require("./connections.js");
const express = require("express");

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.listen(5500, () => {
    console.log("Sever is now listening at port5500");
});

client.connect();

// Login User get the user from db and chek  whether he is exit or not

// app.get("/users", (req, res) => {
//     client.query(
//         `SELECT  * from USERS
//   WHERE
//   `,
//         (err, result) => {
//             if (!err) {
//                 res.send(result.rows);
//             }
//         }
//     );
//     client.end;
// });

// ----------

// checking the  corrct user
app.get("/users", (req, res) => {
    client.query(
        `SELECT  password from USERS
  WHERE
  `,
        (err, result) => {
            if (!err) {
                res.send(result.rows);
            }
        }
    );
    client.end;
});
// ----------

// GET all users
// app.get("/users", (req, res) => {
//     client.query(`SELECT  * from USERS`, (err, result) => {
//         if (!err) {
//             res.send(result.rows);
//         }
//     });
//     client.end;
// });

// single user by id

// app.get("/users/:id", (req, res) => {
//     client.query(
//         `Select * from users where id=${req.params.id}`,
//         (err, result) => {
//             if (!err) {
//                 res.send(result.rows);
//             }
//         }
//     );
//     client.end;
// });

// add new usr

app.post("/users", (req, res) => {
    const user = req.body;
    let insertQuery = `insert into users(id, firstname, lastname, location)
                       values(${user.id}, '${user.firstname}', '${user.lastname}', '${user.location}')`;

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send("Insertion was successful");
        } else {
            console.log(err.message);
        }
    });
    client.end;
});

// duplicated method inste of post ima using get

app.get("/users", (req, res) => {
    const user = req.body;
    let insertQuery = `insert into users( firstname, lastname, email,password)
                       values('sample first name', 'sample lastname','kiran123@gmai.com' ,'1234qwer' );
                       `;

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send("Insertion was successful");
        } else {
            console.log(err.message);
        }
    });
    client.end;
});

// update user

// app.put("/users/:id", (req, res) => {
//   let user = req.body;
//   let updateQuery = `update users
//                        set firstname = '${user.firstname}',
//                        lastname = '${user.lastname}',
//                        location = '${user.location}'
//                        where id = ${user.id}`;

//   client.query(updateQuery, (err, result) => {
//     if (!err) {
//       res.send("Update was successful");
//     } else {
//       console.log(err.message);
//     }
//   });
//   client.end;
// });

// delete user

// app.delete("/users/:id", (req, res) => {
//   let insertQuery = `delete from users where id=${req.params.id}`;

//   client.query(insertQuery, (err, result) => {
//     if (!err) {
//       res.send("Deletion was successful");
//     } else {
//       console.log(err.message);
//     }
//   });
//   client.end;
// });