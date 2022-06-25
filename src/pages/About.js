import { html, css } from '../../slim-ssr.js';
import { Navbar, styles as NavbarStyles } from '../components/Navbar.js';

const features = [
  'Ship zero JS by default',
  'Expressive static components and styling using template literal strings',
  'Islands of interactivity with web components',
  'No build step required',
  'Zero config necessary with common sense defaults',
];

export function About() {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>About</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <style>
          ${styles}
        </style>
        <link rel="stylesheet" href="/global.css" />
      </head>
      <body>
        ${Navbar()}
        <main>
          <section class="about-container">
            <h1>About</h1>
            <p>
              This is a demonstration of a minimal SSR framework written in 40
              lines of code. This framework builds closely on top of modern web
              standards and conventions.
            </p>
            <p>Features include:</p>
            <ul>
              ${features.map((feature) => html`<li>${feature}</li>`)}
            </ul>
            <p>
              This implementation is based on the research, experimentation, and
              takeaways from work on
              <a href="https://delgada.dev">Delgada</a>––a web framework for
              building slim UIs––during the last few months.
            </p>
            <p>
              An in depth of write up on this SSR implementation can be found
              <a
                href="https://hawkticehurst.com/writing/an-ssr-framework-in-40-lines-of-code"
                >here</a
              >.
            </p>
          </section>
        </main>
      </body>
    </html>
  `;
}

export const styles = css`
  h1 {
    font-size: 35px;
  }
  .about-container {
    width: 50%;
    margin: 4rem 0 1rem 0;
  }
  @media (max-width: 767px) {
    .about-container {
      width: 90%;
      margin: 4rem 1rem 1rem 1rem;
    }
  }

  ${NavbarStyles}
`;
