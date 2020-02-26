const express = require('express'),
    router = express.Router();

router.get('/:firstname?/:lastname?/:age?', (req, res) => {

    const { firstname, lastname, age } = req.params;
    let snippet = `<h1>Hello World </h1>`

    if (!!req.params.firstname) {
       snippet = `<h1>Hello ${firstname}, ${lastname}, ${age} </h1>`
    }

    

    res
        .status(200)
        .send(snippet)
        .end();


});

module.exports = router;

