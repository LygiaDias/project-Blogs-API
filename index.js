const express = require('express');
const userRouter = require('./router/routerUser');
const loginRouter = require('./router/loginRouter');
const categoriesRouter = require('./router/routerCategories');
const postRouter = require('./router/routerPost');

const app = express();

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(express.json());
app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);