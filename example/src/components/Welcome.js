import { html, css } from 'slim-ssr';

export function Welcome({ name, link }) {
  return html`<h1>Welcome to <a href="${link}">${name}</a>!</h1>`;
}

export const styles = css`
  h1 {
    font-size: 50px;
    margin: 8rem 0 1rem 0;
    text-align: center;
  }
  h1 > a:hover,
  h1 > a:focus {
    text-decoration-thickness: 6px;
    text-underline-offset: 2px;
  }
  @media (max-width: 767px) {
    h1 {
      font-size: 45px;
    }
  }
`;
