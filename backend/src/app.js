const express = require('express');
const routes = require('./routes');
const cors = require('cors');

class SetupApp {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(routes);
  }
}

module.exports = new SetupApp().app;