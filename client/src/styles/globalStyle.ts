import { createGlobalStyle } from 'styled-components/macro';
import reset from 'styled-reset';
import { ScrollStyle } from './commonStyles';

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${ScrollStyle};
  
  @font-face {
    font-family: 'InfinitySans-RegularA1';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'InfinitySans-BoldA1';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-BoldA1.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'InfinitySans-RegularA1', -apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

`;

export default GlobalStyle;
