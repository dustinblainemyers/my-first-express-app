const express = require('express');
const app = express();


app.listen(3333, () =>{

    console.log("Server running on port 3333");
});

app.get('/', (request, response) =>{
    const snippet = `<h1> This i a snippet wrapped in H1 tag </H1>`;
    response
      .status(200)
      .send(snippet)
      .end();
})


const fooController = (req, res) => {
    const snippet = ` <h1> Test </h1>`;
    res
      .status(200)
      .send(snippet)
      .end();
}