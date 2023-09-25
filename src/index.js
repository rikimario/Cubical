const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const PORT = 5000;

// Handlebars configuration
app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.get('/', (req, res) => {
  // res.send('Hello from express server!')
  res.render('index');
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}...`));