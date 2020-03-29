const express = require('express');
const { errors } = require('celebrate');
const routes = require('./routes');
const cors = require('cors');

class SetupApp {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.validation();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  validation() {
    this.app.use(errors());
  }

  routes() {
    this.app.use(routes);
  }
}

module.exports = new SetupApp().app;