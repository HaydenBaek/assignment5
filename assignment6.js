const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/js", express.static("./public/js"));
app.use("/css", express.static("./public/css"));
app.use("/img", express.static("./public/img"));


app.get("/", function (req, res) {
    let doc = fs.readFileSync("./app/html/assignment6.html", "utf8");
    res.send(doc);
});

app.get("/snack", function (req, res) {
    let formatOfResponse = req.query["format"];
    if (formatOfResponse == "html") {
        res.setHeader("Content-Type", "text/html");
        res.send(fs.readFileSync("./app/data/snack.html", "utf8"));
    } else if (formatOfResponse == "json") {
        res.setHeader("Content-Type", "application/json");
        res.send(fs.readFileSync("./app/data/snack.js", "utf8"));
    } else {
        res.send({ status: "fail", msg: "Wrong format!" });
    }
});

app.get("/content1", function (req, res) {
    let formatOfResponse = req.query["format"];
    if (formatOfResponse == "html") {
        res.setHeader("Content-Type", "text/html");
        res.send(fs.readFileSync("./app/data/content1.html", "utf8"));
    } else if (formatOfResponse == "json") {
        res.setHeader("Content-Type", "application/json");
        res.send(fs.readFileSync("./app/data/content1.js", "utf8"));
    } else {
        res.send({ status: "fail", msg: "Wrong format!" });
    }
});

app.get("/content2", function (req, res) {
    let formatOfResponse = req.query["format"];
    if (formatOfResponse == "html") {
        res.setHeader("Content-Type", "text/html");
        res.send(fs.readFileSync("./app/data/content2.html", "utf8"));
    } else if (formatOfResponse == "json") {
        res.setHeader("Content-Type", "application/json");
        res.send(fs.readFileSync("./app/data/content2.js", "utf8"));
    } else {
        res.send({ status: "fail", msg: "Wrong format!" });
    }
});

app.get("/content3", function (req, res) {
    let formatOfResponse = req.query["format"];
    if (formatOfResponse == "html") {
        res.setHeader("Content-Type", "text/html");
        res.send(fs.readFileSync("./app/data/content3.html", "utf8"));
    } else if (formatOfResponse == "json") {
        res.setHeader("Content-Type", "application/json");
        res.send(fs.readFileSync("./app/data/content3.js", "utf8"));
    } else {
        res.send({ status: "fail", msg: "Wrong format!" });
    }
});

app.get("/content4", function (req, res) {
    let formatOfResponse = req.query["format"];
    if (formatOfResponse == "html") {
        res.setHeader("Content-Type", "text/html");
        res.send(fs.readFileSync("./app/data/content4.html", "utf8"));
    } else if (formatOfResponse == "json") {
        res.setHeader("Content-Type", "application/json");
        res.send(fs.readFileSync("./app/data/content4.js", "utf8"));
    } else {
        res.send({ status: "fail", msg: "Wrong format!" });
    }
});

app.get("/rizzy", function (req, res) {
    let formatOfResponse = req.query["format"];
    if (formatOfResponse == "html") {
        res.setHeader("Content-Type", "text/html");
        res.send(fs.readFileSync("./app/data/rizzy.html", "utf8"));
    } else if (formatOfResponse == "json") {
        res.setHeader("Content-Type", "application/json");
        res.send(fs.readFileSync("./app/data/content4.js", "utf8"));
    } else {
        res.send({ status: "fail", msg: "Wrong format!" });
    }
});

app.get("/conten1", function (req, res) {
    let doc = fs.readFileSync("./app/data/conten1.js", "utf8");
    res.setHeader("Content-Type", "application/json");
    res.send(doc);
});





app.get("/app/data/profile.html", function (req, res) {
    let doc = fs.readFileSync("./app/data/profile.html", "utf8");

    // just send the text stream
    res.send(doc);
});





app.get("/assignment6-database", function (req, res) {
    const mysql = require("mysql2");
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "assignment6"
    });

    connection.connect();

    // Specify the user to query
    let usr = "DangerousBoi";

    connection.execute(
        "SELECT A01418743_user.user_name, A01418743_user_timeline.description, A01418743_user_timeline.date_of_post, A01418743_user_timeline.time_of_post FROM A01418743_user INNER JOIN A01418743_user_timeline ON A01418743_user.ID = A01418743_user_timeline.user_id WHERE A01418743_user.user_name = ?",
        [usr],
        function (error, results) {
            if (error) {
                console.error(error);
                res.status(500).send("An error occurred while fetching data.");
                return;
            }

            // Construct an HTML table to send back
            let table = `
                <table border='1'>
                    <tr>
                        <th>User Name</th>
                        <th>Description</th>
                        <th>Date of Post</th>
                        <th>Time of Post</th>
                    </tr>
            `;
            results.forEach(row => {
                table += `
                    <tr>
                        <td>${row.user_name}</td>
                        <td>${row.description}</td>
                        <td>${row.date_of_post}</td>
                        <td>${row.time_of_post}</td>
                    </tr>
                `;
            });
            table += "</table>";

            // Send the HTML table back to the client
            res.send(table);

            connection.end();
        }
    );
});



let port = 8000;
app.listen(port, function () {
    console.log("Example app listening on port number " + port + "!");
});
