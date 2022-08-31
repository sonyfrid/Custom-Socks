const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');
const hbs = require('hbs');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
require('dotenv').config();

// Импортируем созданный в отдельный файлах рутеры.
const indexRouter = require('./routes/index.router');
const signupRouter = require('./routes/signup.router');
const signinRouter = require('./routes/signin.router');
const lkRouter = require('./routes/lk.router');
const ordersRouter = require('./routes/orders.router');

const constructorRouter = require('./routes/constructor.router');
// const logoutRouter = require('./routes/signin.router')

const app = express();

const PORT = process.env.PORT || 3001;

const sessionConfig = {
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'blabla', // Секретное слово для шифрования, может быть любым
  store: new FileStore(),
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    // maxAge: 10000,
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

app.use(session(sessionConfig));
app.use((req, res, next) => {
  res.locals.name = req.session?.name;
  next();
});

// Сообщаем express, что в качестве шаблонизатора используется "hbs".
app.set('view engine', 'hbs');
// Сообщаем express, что шаблона шаблонизаторая (вью) находятся в папке "ПапкаПроекта/views".
app.set('views', path.join(__dirname, 'views'));
// для того, чтобы использовать partials
hbs.registerPartials(path.join(process.env.PWD, 'views', 'partials'));

hbs.registerPartials(path.join(__dirname, 'views', 'partials'));
// Подключаем middleware morgan с режимом логирования "dev", чтобы для каждого HTTP-запроса на сервер в консоль выводилась информация об этом запросе.
app.use(logger('dev'));
// Подключаем middleware, которое сообщает epxress, что в папке "ПапкаПроекта/public" будут находится статические файлы, т.е. файлы доступные для скачивания из других приложений.
app.use(express.static(path.join(__dirname, 'public')));

// Подключаем middleware, которое позволяет читать содержимое body из HTTP-запросов типа POST, PUT и DELETE.
app.use(express.urlencoded({ extended: true }));
// Подключаем middleware, которое позволяет читать переменные JavaScript, сохранённые в формате JSON в body HTTP-запроса.
app.use(express.json());

app.use('/', indexRouter);
app.use('/signup', signupRouter);
app.use('/signin', signinRouter);
app.use('/constructor', constructorRouter);
app.use('/lk', lkRouter);
app.use('/orders', ordersRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
