const Joi = require("@hapi/joi");
const express = require("express");
const router = express.Router();

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Horror" },
  { id: 3, name: "Romance" },
];

/* METHOD : GET ----- */
router.get("/genres", (req, res) => {
  res.send(genres);
});

router.get("/genres/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("The movie with the given ID was not found !"); // 404 Object not found

  res.send(genre);
});

/* METHOD : POST ----- */
router.post("/genres", (req, res) => {
  const { error } = validateInput(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  const genre = {
    id: courses.length + 1,
    name: req.body.name,
  };
  genres.push(genre);
  res.send(genre);
});

/* METHOD : PUT ----- */
router.put("/genres/:id", (req, res) => {
  /* Look up the course, If doesn't exit return 404 */
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("The course with the given ID was not found !");

  /* If Invalid return 400 - Bad request */
  const { error } = validateInput(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  genre.name = req.body.name; //Update course
  res.send(genre); //Return Updated course details
});

/* Input Validation */
function validateInput(body) {
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
  });
  return schema.validate(body);
}

module.exports = router;
