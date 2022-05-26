const router = require('express').Router();
// const apiRoutes = require('./api');

// router.use('/api',apiRoutes);

router.get('/',(req,res)=>{
    res.render('home')
    // res.send('<h1>Test Test 123</h1>')
});

module.exports = router;