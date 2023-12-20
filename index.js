const express = require('express');
require('./services/passport');
const app = express();
const authRoutes = require('./routes/authRoutes')

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=>{
    console.log('server started at 5000');
});

// 4%2F0AfJohXkx1FxtQdu4LbSXUyCiqQIsz9CI0L27cGGjitlm78GmxetYckqZM8a5jHn5B_4alA