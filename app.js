const express = require ('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

//home page route
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`)
})

//about page route
app.get('/about', (req, res) => {
    res.sendFile(`${__dirname}/views/about.html`)
})

//works page route
app.get('/works', (req, res) => {
    res.sendFile(`${__dirname}/views/works.html`)
})

app.listen(port, () => {
    console.log(`Paramore App listening on port ${port}`)
})



