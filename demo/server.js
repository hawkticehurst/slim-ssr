import express from 'express';
import { register } from 'slim-ssr';
import { Index } from './src/pages/Index.js';
import { About } from './src/pages/About.js';
import { Hello } from './src/pages/Hello.js';

const app = express();

const routes = [
  { path: '/', component: Index },
  { path: '/about', component: About },
  { path: '/hello/:name?', component: Hello },
];

const islands = ['CounterButton.js'];

register(app, routes, { islands });

const port = 4000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
