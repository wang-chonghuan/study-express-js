import { Router, request, response } from "express";

const router = Router();

const data = [
  { id: 1, title: 'Iron Man', year: '2008' },
  { id: 2, title: 'Thor', year: '2011' },
  { id: 3, title: 'Captain America', year: '2011' },
];

router.get('/', (request, response) => {
  response.send(data);
});

export { router };