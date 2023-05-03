import express, { request, response } from "express";
import {router as movieRouter} from './movie/index.js';

const app = express();

app.use('/movie', movieRouter);

app.get('/', (request, response) => response.redirect('/movie'));

function asyncFunc() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('This is a promise')
      }, 2000);
    }
  );
}

app.listen(8080, () => {
  console.log('Movie database accessible at http://localhost:8080');
  const promise = asyncFunc();
  promise.then((value) => {
    console.log(value);
  });
});
