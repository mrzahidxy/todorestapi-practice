const express = require('express');



const app = express();
app.use(express.json());

app.use("/todos/", require("./routes/todos"))

app.listen(8000, () => {
    console.log('App is running');
})

