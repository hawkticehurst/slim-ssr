# Slim SSR

A demonstration of a minimal SSR framework written in 40 lines of code (located in [`slim-ssr.js`](./slim-ssr.js)).

Features include:

- Ship zero JS by default
- Expressive static components and styling using template literal strings
- Islands of interactivity with web components
- No build step required
- Zero config necessary with common sense defaults

This implementation is based on the research, experimentation, and takeaways from work on [Delgada](https://delgada.dev)––a web framework for building slim UIs––during the last few months.

The point of this demo is not to provide a feature complete implementation of SSR, but to show that one can get shockingly far with very little code by building on top of modern web standards and conventions available in 2022.

An in depth of write up on this SSR implementation can be found [here (coming soon)](https://hawkticehurst.com/writing/a-ssr-framework-in-40-lines-of-code).

## Usage

```
npx degit hawkticehurst/slim-ssr slim-ssr-template
cd slim-ssr-template
npm install
npm start
```

## License

This is licensed under [MIT](./LICENSE). Feel free to use, remix, and adapt the code found this repo in your own projects.
