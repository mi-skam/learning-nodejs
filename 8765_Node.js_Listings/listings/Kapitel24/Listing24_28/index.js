import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import csurf from 'csurf';
import exphbs from 'express-handlebars';
import express from 'express';

const csurfFunc = csurf({ cookie: true });

const app = express();
app.use(cookieParser());
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', csurfFunc, (req, res) => {
  res.render('form', { csrfToken: req.csrfToken(), layout: false });
});

app.post(
  '/form',
  express.urlencoded({ extended: false }),
  csurfFunc,
  (req, res) => {
    res.send(
      `You just bought ${req.body.amount} pieces of ${req.body.article}`,
    );
  },
);
app.listen(8080);
