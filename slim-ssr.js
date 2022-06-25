import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

export function register(app, routes, options) {
  for (const route of routes) {
    app.get(route.path, (req, res) => {
      res.set('Content-Type', 'text/html');
      res.send(Buffer.from(route.component(req)));
    });
  }
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  if (options.islands) {
    for (const island of options.islands) {
      app.get(`/${island}`, (_, res) => {
        res.set('Content-Type', 'application/javascript');
        res.sendFile(island, {
          root: path.join(__dirname, 'src', 'components'),
        });
      });
    }
  }
  if (options.public) {
    app.use(express.static(`${__dirname}/public`));
  }
}

export function html(strings, ...values) {
  const parts = [strings[0]];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === 'object') {
      values[i].map((value) => {
        parts.push(String(value));
      });
    } else {
      parts.push(String(values[i]));
    }
    parts.push(strings[i + 1]);
  }
  return parts.join('');
}

export const css = html;