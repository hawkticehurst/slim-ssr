import express from 'express';
import path from 'path';
import process from 'process';
export function register(app, routes, options) {
  for (const route of routes) {
    app.get(route.path, (req, res) => {
      res.set('Content-Type', 'text/html');
      res.send(Buffer.from(route.component(req)));
    });
  }
  if (options.islands) {
    for (const island of options.islands) {
      app.get(`/${island}`, (_, res) => {
        res.set('Content-Type', 'application/javascript');
        res.sendFile(island, {
          root: path.join(process.cwd(), 'src', 'components'),
        });
      });
    }
  }
  app.use(express.static(`${process.cwd()}/public`));
}
export function html(strings, ...values) {
  const parts = [strings[0]];
  for (let i = 0; i < values.length; i++) {
    if (Array.isArray(values[i])) {
      for (const value of values[i]) {
        parts.push(String(value));
      }
    } else {
      parts.push(String(values[i]));
    }
    parts.push(strings[i + 1]);
  }
  return parts.join('');
}
export const css = html;