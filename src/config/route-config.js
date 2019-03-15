//export an object with a function called init which loads the defined routes and defines them on express app object
module.exports = {
  init(app) {
    const staticRoutes = require("../routes/static");
    const topicRoutes = require("../routes/topics");
    app.use(staticRoutes);
    app.use(topicRoutes);
  }
};
