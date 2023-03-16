"use strict";
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());

const PORT = 3000;

const {
  getAcronyms,
  createAcronym,
  updateAcronym,
  deleteAcronym,
} = require("./handlers");

app.get("/acronym", getAcronyms);
app.post("/acronym", createAcronym);
app.patch("/acronym/:acronymID", updateAcronym);
app.delete("/acronym/:acronymID", deleteAcronym);

app.use(morgan("tiny"));

app
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
