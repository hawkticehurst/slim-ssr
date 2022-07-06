import { html, css } from 'slim-ssr';
import { Navbar, styles as NavbarStyles } from '../components/Navbar.js';

const features = [
  'Ship zero JavaScript by default',
  'Expressive markup and styling using template literals',
  'Island-based architecture via web components',
  'No build step',
  'Zero config',
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
              This is a demonstration of a server-side rendering (SSR) web framework that is implemented with 37
              lines of code.
            </p>
            <p>Features include:</p>
            <ul>
              ${features.map((feature) => html`<li>${feature}</li>`)}
            </ul>
            <p>
              An in depth of write up on this SSR implementation can be found
              <a
                href="https://hawkticehurst.com/writing/an-ssr-framework-in-37-lines-of-code"
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
