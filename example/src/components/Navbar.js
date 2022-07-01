import { html, css } from 'slim-ssr';

export function Navbar() {
  return html`
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/hello">Hello</a>
      </nav>
    </header>
  `;
}

export const styles = css`
  header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #efefef;
    border: solid 2px #000;
    border-radius: 8px;
    width: min-content;
    padding: 0.5rem 1.25rem;
  }
  nav > a {
    font-weight: 500;
    font-size: 18px;
    margin: 0 0.5rem;
  }
  nav > a:hover,
  nav > a:focus {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 2px;
    outline: none;
  }
`;
