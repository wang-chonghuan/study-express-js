import { getAll } from "./model.js";

async function listAction(request, response) {
  const data = await getAll();
  response.send(data);
}

export { listAction };