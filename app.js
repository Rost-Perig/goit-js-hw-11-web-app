const express = require('express');
const exhbs = require('express-handlebars');

const PORT = process.env.PORT || 4444;

const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exhbs({
    extname: 'hbs',
  }),
);

app.get('/', (req, res) => {
    res.render('home', {layout: 'main', cssFileName: 'home', pageTitle: 'HOME WORK #11'});
});

app.get('/task1', (req, res) => {
  res.render('task1', { cssFileName: 'task1-2', pageTitle: 'Task 1' });
});

app.get('/task2', (req, res) => {
  res.render('task2', { cssFileName: 'task1-2', pageTitle: 'Task 2' });
});

app.get('/task3', (req, res) => {
  res.render('task3', { cssFileName: 'task3', pageTitle: 'Task 3' });
});

app.get('/variant', (req, res) => {
  res.render('variant', { cssFileName: 'task1-2', pageTitle: 'Variant' });
});

app.listen(PORT, () => {
  console.log(`Application server is running on port ${PORT}`);
});
