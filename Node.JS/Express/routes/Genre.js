const Joi = require("@hapi/joi");
const express = require("express");
const router = express.Router();

const Genre = require("../dao/models/Genre");

/* METHOD : GET ----- */
router.get("/", (req, res) => {
  const newLocal = "<h2>Type <b style='color:red;'>/api/genres</b> to see genre details</h2>";
  res.send(newLocal);
});

router.get("/api/genres", async (req, res) => {
  const genres = await Genre.find();
  res.send(genres);
});

router.get("/api/genres/:id", async (req, res) => {
  const genre = await Genre.findById(req.params.id);

  if (!genre) return res.status(404).send("The genre with the given ID was not found.");

  res.send(genre);
});

/* METHOD : POST ----- */
router.post("/api/genres", async (req, res) => {
  /* const genres = [
    { name: "Project Power", release: "2020-08-14", genre: "Action" },
    { name: "The Conjuring: The Devil Made Me Do It", release: "2020-09-11", genre: "Horror" },
    { name: "Titanic", release: "1997-11-18", genre: "Romance" },
  ]; */
  const { error } = validateInput(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  let genre = new Genre(req.body);
  genre = await genre.save();

  res.send(genre);
});

/* METHOD : PUT ----- */
router.put("/api/genres/:id", async (req, res) => {
  /* If Invalid return 400 - Bad request */
  const { error } = validateInput(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  /* Look up the course, If doesn't exit return 404 */
  const genre = await Genre.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!genre) return res.status(404).send("The course with the given ID was not found !");

  genre.name = req.body.name; //Update course
  res.send(genre); //Return Updated course details
});

router.put("/api/genres/release/:id", async (req, res) => {
  /* Look up the course, If doesn't exit return 404 */
  let genre = await Genre.findById(req.params.id);
  const { release } = genre;
  console.log(new Date());
  if (!genre) return res.status(404).send("The course with the given ID was not found !");

  if (new Date() > release) {
    genre.isAvailable = true;
  }
  const result = await Genre.updateOne({ _id: req.params.id }, genre);
  res.send(result); //Return Updated course details
});

router.delete("/api/genres/:id", async (req, res) => {
  const genre = await Genre.findByIdAndRemove(req.params.id);

  if (!genre) return res.status(404).send("The genre with the given ID was not found.");

  res.send(genre);
});

/* Input Validation */
function validateInput(body) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    genre: Joi.string().min(3).max(50).required(),
    release: Joi.date(),
    isAvailable: Joi.boolean(),
  });
  return schema.validate(body);
}

module.exports = router;
