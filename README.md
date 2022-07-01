# Slim SSR

An implementation of a server-side rendering (SSR) web framework written in 37 lines of code.

Features include:

- Ship zero JavaScript by default
- Expressive markup and styling using template literals
- Island-based architecture via web components
- No build step
- Zero configuration
- Even more stuff

This implementation is based on the research, experimentation, and takeaways from work on [Delgada](https://delgada.dev) –– a web framework for building slim multipage websites.

The point of this is not to provide a feature complete implementation of SSR by 2022 standards, but to show that one can get shockingly far with very little code by building on top of the web standards and conventions available today. Think of it as a celebration of the modern web and what it enables.

An in depth of write up on this SSR implementation can be found [here (coming soon)](https://hawkticehurst.com/writing/a-ssr-framework-in-37-lines-of-code).

## Usage

To test out the example app, clone this repo locally and run the following commands.

```bash
# Install slim-ssr dependencies
cd slim-ssr && npm install && cd ..

# Install example dependencies
cd example && npm install

# Start example server
npm start
```

## License

This is licensed under [MIT](./LICENSE). Feel free to use, remix, and adapt the code found this repo in your own projects.
