const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const router = require('./routes');
const errHandler = require('./middlewares/errHandler');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use(router)
app.use(errHandler)

app.listen(port, () => {
    console.log(`Launch 🚀🚀🚀 at `,port);
})
