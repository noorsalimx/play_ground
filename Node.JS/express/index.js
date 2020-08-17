// const Joi = require("joi");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
  { id: 4, name: "course4" },
];

//Handle GET method -------------------------------------
app.get("/", (req, res) => {
  res.send('Type "/api/courses" to see course details');
});

app.get("/api/num", (req, res) => {
  res.send([1, 2, 3, 4]);
});

/*
app.get('/api/num/:id', (req, res) => {
    res.send(req.params.id); //type "/api/num/12"
});

app.get('/api/d/:year/:month', (req, res) => {
    res.send(req.params); //type "/api/d/2019/12"
});

app.get('/api/q/:year/:month', (req, res) => {
    res.send(req.query); //type "/api/q/2019/12?sortBy=name"
});
*/

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("The course ID was not found !!"); // 404 Object not found

  console.log(`
/*-----------------------------------------------*
 *                                               *
 *                   GLOBAL                      *
 *                                               *
 ------------------------------------------------*/
`);

  res.send(course);
});

//Handle POST method ------------------------------------
app.post("/api/courses", (req, res) => {
  //Input validation in normal way
  // 400 Bad request
  if (!req.body.name || req.body.name.length < 5) {
    return res.status(400).send({ error: "Name is required and should be minimum 5 characters" });
  }

  /*   //Input Validation using Joi
  const schema = {
    name: Joi.string().min(4).required(),
  };
  const result = Joi.validate(req.body, schema);
  //console.log(result);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  } */

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

//Handle PUT method --------------------------------------
app.put("/api/courses/:id", (req, res) => {
  //Look up the course //If doesn't exit return 404
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("The course ID was not found !!");

  //If Invalid return 400 - Bad request
  const schema = {
    name: Joi.string().min(4).required(),
  };
  const { error } = Joi.validate(req.body, schema);
  if (error) return res.status(400).send(error.details[0].message);

  course.name = req.body.name; //Update course
  res.send(course); //Return Updated course details
});

app.listen(port, () => console.log(`App is listening to port ${port}`));
