const express = require('express'),
    router = express.Router();

router.get('/', (req,rest) => {
    const snippet = `<h1>Hello World</h1>`;
    res
        .status(200)
        .send(snippet)
        .end();
})

