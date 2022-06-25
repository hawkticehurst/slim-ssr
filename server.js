import express from 'express';
import { register } from './slim-ssr.js';
import { Index } from './src/pages/Index.js';
import { About } from './src/pages/About.js';
import { Hello } from './src/pages/Hello.js';

const app = express();
const port = 3000;

const routes = [
  { path: '/', component: Index },
  { path: '/about', component: About },
  { path: '/hello/:name?', component: Hello },
];

const islands = ['CounterButton.js'];

register(app, routes, { islands, public: true });

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
