const cors = require("cors");
const express = require("express");
require('dotenv').config();

const applyCorsConnection = (app) => {
  app.use(cors({ origin: [process.env.LOCAL_CLIENT],credentials:true}));
  app.use(express.json());
};

module.exports = applyCorsConnection;