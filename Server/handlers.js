const data = require("./data");
const { v4: uuidv4 } = require("uuid");

const getAcronyms = async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const search = req.query.search || "";
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const filteredData = data.filter(
      (item) =>
        item.definition.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );

    const results = filteredData.slice(startIndex, endIndex);

    console.log(results.length);
    const hasNextPage = endIndex < filteredData.length;

    if (results.length === 0) {
      return res.status(404).json({
        message:
          "No data found by search input. Correct what you want to find out.",
      });
    }

    const response = {
      data: results,
      hasNextPage: hasNextPage,
    };

    res.json(response);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const createAcronym = async (req, res) => {
  try {
    const { acronym, definition } = req.body;

    if (!acronym || !definition) {
      return res.status(400).json({ message: "Invalid request body" });
    }

    const newAcronym = {
      _id: uuidv4(),
      acronym,
      definition,
    };

    data.push(newAcronym);

    res.status(201).json({
      message: "Acronym created successfully",
      data: newAcronym,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateAcronym = async (req, res) => {
  const { acronym, definition } = req.body;
  const { acronymID } = req.params;
  const index = data.findIndex((item) => item._id === acronymID);

  try {
    if (index >= 0) {
      const updatedAcronym = { ...data[index], acronym, definition };
      data[index] = updatedAcronym;
      res.status(200).json({
        message: "Acronym updated successfully",
        data: updatedAcronym,
      });
    } else {
      res.status(404).json({ message: "Acronym not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteAcronym = async (req, res) => {
  const { acronymID } = req.params;
  const index = data.findIndex((item) => item._id === acronymID);

  try {
    if (index >= 0) {
      const deletedAcronym = data[index];
      data.splice(index, 1);
      res.status(200).json({
        message: "Acronym deleted successfully",
        deletedAcronym: deletedAcronym,
      });
    } else {
      res.status(404).json({ message: "Acronym not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAcronyms, createAcronym, updateAcronym, deleteAcronym };
