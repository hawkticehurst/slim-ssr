# Slim SSR Experiment

A demonstration of a minimal SSR framework written in 40 lines of code. This framework builds closely on top of modern web standards and conventions.

Features include:

- Ship zero JS by default
- Expressive static components using template literal strings
- Islands of interactivity with web components
- No build step required
- Zero config necessary with common sense defaults

This implementation is based on the research, experimentation, and takeaways from work on [Delgada](https://delgada.dev)––a web framework for building slim UIs––during the last few months.

An in depth of write up on this SSR implementation can be found [here](https://hawkticehurst.com/writing/an-ssr-framework-in-40-lines-of-code).

## Usage

```
npx degit delgada-ui/slim-ssr slim-ssr-template
cd slim-ssr-template
npm install
npm start
```

## License

This is licensed under [MIT](./LICENSE). Feel free to use, remix, and adapt the code found the `slim.js` file in your own projects.
