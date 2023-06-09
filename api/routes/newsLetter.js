const express = require('express');
const router = express.Router();

router.get('/', (req, res, next ) => { // getting the announcementRoutes key from the app.js file.
    res.status(200).json({
        message: 'Handling GET request to /newsLetter'
    });
});

router.post('/', (req, res, next ) => {
    res.status(201).json({
        message: 'Handling POST request to /newsLetter',
    });
});


router.get('/:newsLetterId', (req, res, next) => {
        res.status(200).json({
            message: 'newsLetter details',
            newsLetterId: req.params.newsLetterId
        })
})


router.patch('/:newsLetterId', (req, res, next) => {
    const id = req.params.newsLetterId
    res.status(201).json({
        message: `newsLetter updated at id: ${id}`,
        newsLetterId: id
    })
})

router.delete('/:newsLetterId', (req, res, next) => {
    const id = req.params.newsLetterId
   if (id !== undefined) {
        res.status(200).json({
            message: `newsLetter id: ${id}; deleted`,
            newsLetterId: id
        })
    }
})



module.exports = router; // connecting to the router on the app.js file.