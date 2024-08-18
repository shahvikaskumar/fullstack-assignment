const express = require("express");
const { Createcard, Getallcard, Getsinglecard } = require("../controllers/card_controller");
const router = express.Router();

// Route to create a new card
router.post('/cards', Createcard);

// Route to get all cards
router.get('/cards', Getallcard);

// Route to get a single card by title
router.get('/cards/:title', Getsinglecard);

module.exports = router;