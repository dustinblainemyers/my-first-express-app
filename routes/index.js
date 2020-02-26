const express = require('express'),
router = express.Router();

const rootController = (req, res) => {
    const snippet = `<h1>Happy Birthday Alan and (belated) Josh!</h1>`;
    res
      .status(200)
      .send(snippet)
      .end();
  };