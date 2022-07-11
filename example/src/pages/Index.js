import { html, css } from 'slim-ssr';
import { Navbar, styles as NavbarStyles } from '../components/Navbar.js';
import { Welcome, styles as WelcomeStyles } from '../components/Welcome.js';

export function Index() {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Home</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <style>
          ${styles}
        </style>
        <link rel="stylesheet" href="/global.css" />
        <script type="module" src="/CounterButton.js"></script>
      </head>
      <body>
        ${Navbar()}
        <main>
          ${Welcome({ name: 'Slim SSR', link: 'https://github.com/hawkticehurst/slim-ssr' })}
          <p>Get started by editing <code>src/pages/Index.js</code></p>
          <counter-button>
            <button>Clicked <span id="count">0</span> times</button>
          </counter-button>
        </main>
      </body>
    </html>
  `;
}

const styles = css`
  counter-button:not(:defined) button {
    font-family: inherit;
    font-size: inherit;
    background-color: #dedede;
    color: darkgrey;
    border: 2px solid #000;
    border-radius: 8px;
    padding: 6px 10px;
  }
  counter-button:not(:defined) button:hover {
    cursor: not-allowed;
    outline: none;
  }
  p {
    text-align: center;
  }
  code {
    font-family: monospace;
    font-size: 16px;
    background-color: #e4e4e4;
    padding: 0.25rem;
    border-radius: 4px;
  }
  counter-button {
    margin: 1rem;
  }

  ${NavbarStyles}
  ${WelcomeStyles}
`;
