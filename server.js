const express = require('express');
const app = express();
require('dotenv').config();


const PORT = process.env.PORT;
// thi is modifiedc code

app.listen(PORT,()=>{
    console.log(`listening on port...${PORT}`);
})
