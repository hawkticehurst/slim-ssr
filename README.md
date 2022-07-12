# Slim SSR

An implementation of a server-side rendering (SSR) web framework written in 37 lines of code.

An in-depth write-up on this SSR implementation can be found [here](https://hawkticehurst.com/writing/an-ssr-framework-in-37-lines-of-code).

Features include:

- Ship zero JavaScript by default
- Expressive markup and styling using tagged templates
- Island-based architecture via web components
- No build step
- Zero configuration

This implementation is based on the research, experimentation, and takeaways from work on [Delgada](https://delgada.dev) –– a web framework for building slim multipage websites.

The point of this is not to provide a feature complete implementation of SSR by 2022 standards, but to show that one can get shockingly far with very little code by building on top of the web standards and conventions available today. Think of it as a celebration of the modern web and what it enables.

## Usage

To test out the demo app, clone this repo locally and run the following commands.

```bash
# Install slim-ssr dependencies
cd slim-ssr && npm install && cd ..

# Install demo dependencies
cd demo && npm install

# Start demo server
npm start
```

## A note on developer experience

For a drastically improved developer experience, install the [lit-html](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html) and [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html) VS Code extensions. 

They make a world of difference while writing component markup/styles in tagged templates. They can be used to add a ton of helpful features like syntax highlighting, quick hover info, HTML tag folding, and so on.

[Emmet](https://emmet.io/) support can also be enabled in tagged templates by changing the "Emmet: Include Languages" setting in VS Code. I recommend adding mappings for `"javascript": "html"` and `"typescript": "html"`.

## License

This is licensed under [MIT](./LICENSE). Feel free to use, remix, and adapt the code found in this repo in your projects.
