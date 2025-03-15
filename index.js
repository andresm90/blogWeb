/*Blog web application using Node.js, Express.js, and EJS. 
The application will allow users to create and view blog posts. 
Posts will not persist between sessions as no database will be used in this version of the application.
*/

import express from "express";
import bodyParser from "body-parser";

//obtener direccion de index del folder de trabajo
/*
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
*/

const app = express();
const port = 3000;
const postTitles = [];
const postContents = [];

//especificar folder con contenido static
app.use(express.static("public"));

//parse forms
app.use(bodyParser.urlencoded({ extended: true }));

//get para home
app.get("/", (req, res) => {
  res.render("index.ejs");
});

//get para about
app.get("/about", (req, res) => {
  res.render("about.ejs");
});

//post para el boton submit
app.post("/submit", (req, res) => {
    console.log("The Title is: "+req.body["pTitle"]);
    console.log("The Content is: "+req.body["pContent"]);
    postTitles.push(req.body["pTitle"]);
    postContents.push(req.body["pContent"]);
    const data = {
        titles: postTitles,
        contents: postContents
      };
    res.render("index.ejs", data);
  });

//pagina listening en port 
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  