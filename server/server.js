const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, '../public');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));

//allows us to use our react router - serves up index.html no matter what request is made
app.get('*', (req,res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
});

app.listen(PORT, ()=> {
    console.log('server running on', PORT);
});