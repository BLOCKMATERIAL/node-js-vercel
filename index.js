// Import packages
const express = require("express");
const tunnel = require("./routes/tunnel");
// const cors = require('cors');


// Middlewares
const app = express();
app.use(express.json(), cors());
// Routes
app.use("/home", tunnel);



// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
