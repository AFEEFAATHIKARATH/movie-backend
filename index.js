
const json_server = require("json-server");

// server creation
const vidServer = json_server.create();

// create middleware for converting json.js
const middleware = json_server.defaults();

const router = json_server.router("db.json");

// connect server with frontend
const cors = require("cors");

vidServer.use(cors());
// apply midware
vidServer.use(middleware);
vidServer.use(router);

const PORT = 8001;
vidServer.listen(PORT, () => {
  console.log(`___video server started at port number ${PORT}`);
});

