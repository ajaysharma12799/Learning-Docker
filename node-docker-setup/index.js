const express = require('express');

const app = express();
const Port = 4321;

app.get('/', (req, res) => {
    res.json({msg: "API Working Successfully"});
});

app.listen(Port, (error) => {
    if(error) console.log(error.message);

    console.log(`Server Running on ${Port} Port`);
})