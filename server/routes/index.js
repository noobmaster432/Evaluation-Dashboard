const router = require('express').Router();
const mentorRouter = require('./mentorRoute.js');
const studentRouter = require('./studentRoute.js');

router.use('/mentor', mentorRouter);
router.use('/student', studentRouter);

module.exports = router;