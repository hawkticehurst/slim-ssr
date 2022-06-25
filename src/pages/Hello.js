import { html, css } from '../../slim-ssr.js';
import { Navbar, styles as NavbarStyles } from '../components/Navbar.js';

export function Hello(req) {
  const name = req.params.name;

  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Hello</title>
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
          <section class="hello-container">
            <h1>Hello ${name ? name : 'Person'}</h1>
            <p>This page uses a URL parameter to render a greeting.</p>
            <p>
              Add a name to the end of the URL above in the form
              <code>/hello/{name}</code>.
            </p>
            <p>
              If no name is provided the greeting is conditionally rendered to
              return "Hello Person" as the default.
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
  .hello-container {
    width: 50%;
    margin: 4rem 0 1rem 0;
  }
  @media (max-width: 767px) {
    .hello-container {
      width: 90%;
      margin: 4rem 1rem 1rem 1rem;
    }
  }
  code {
    font-family: monospace;
    font-size: 16px;
    background-color: #e4e4e4;
    padding: 0.25rem;
    border-radius: 4px;
  }

  ${NavbarStyles}
`;
