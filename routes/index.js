const express = require('express'),
    router = express.Router();

console.log(router);

router.get('/', (req,res) => {
    const snippet = `<h1>Hello World</h1>`;
    res
        .status(200)
        .send(snippet)
        .end();
})

module.exports = router

