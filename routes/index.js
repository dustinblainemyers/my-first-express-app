const express = require('express'),
    router = express.Router();

console.log(router);

router.get('/', (req,res) => {
    
    res.render('template', {
        locals: {
            title: 'Hello Worldoo'
        },
        partials: {
            partial: 'partial-index'
        }
    })
})

module.exports = router

