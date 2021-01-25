import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
  v2.0 | 20110126
  License: none (public domain)
  */
 :root {
    --bg-color: #1e1b2e;
    --bg-contrast: #27293e;
    --bg-header: #9146ff;
    --color-content: white;
    --color-content-light: #6467f4;
    --color-theme: #ff5600;
    --color-theme-light: #6467f4;
    /* --color-theme-light: #9954f6; */
    --color-theme-dark: #ff3a00;
    --color-header-hover: white;
    --font-weight-light: 300;
    --font-weight-regular: 400;
    /* --font-weight-medium: 500; */
    --font-weight-bold: 700;
    --font-weight-extrabold: 800;
    --zindex-default: 1;
    --zindex-overlay: 6;
    --zindex-header: 10;
    --border-radius: 4px;
    /* --transition-in: all .3s ease; */
    /* --ransition-out: all .6s ease; */
  }

  ::selection {
    color: white;
    background: var(--color-content-light);
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
  }
  html {
    font-size: 16px;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    scroll-behavior: auto;
  }
  body {
    line-height: 1;
    font-size: 16px;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    box-sizing: border-box;
  }
  body {
    background:  var(--bg-color);
    color: var(--color-content);
    font-family: 'Inter', sans-serif;
    font-weight: var(--font-weight-light);

  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  a {
    color: white;
    text-decoration: none;

    &:hover, &:focus {
      color: var(--color-theme-light);
    }
  }

  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .img-fluid {
    max-width: 100%;
    height: auto;
  }


  .videosWrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-columns: 1fr;
    grid-gap: 25px 0;
    margin: 0 -10px 50px;

    @media (min-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 40px 0;
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 1450px) {
      grid-template-columns: repeat(5, 1fr);
    }
  }


  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }

  @media (min-width: 1450px) {
    .container {
      /* max-width: 1320px; */
      max-width: 1500px;
    }
  }
`

export default GlobalStyles
