import { createGlobalStyle } from 'styled-components/macro';
import reset from 'styled-reset';
import { ScrollStylePC } from './commonStyles';

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${ScrollStylePC};

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

  :root {
    --bg-form-option: #f2f4f4;
    --bg-insight: rgba(234, 237, 237, 0.87);
    --bg-yellow: rgba(255, 215, 0, 0.47);
    --text-gray50: #919191;
    --text-gray100: #4b4b4b; 
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }


  body, input, [class|="ant"] {
    font-family: 'InfinitySans-RegularA1', -apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    /* 스크롤바 ::-webkit-scrollbar-track 가로/너비를 지정하면 x축 스크롤바 생김,
       App.tsx 컨테이너에 overflow-x: hidden 속성을 주면,
       아이폰 사파리에서 스크롤할 때 body 태그도 같이 스크롤되는 문제 발생.
       body 태그에 overflow-x: hidden 속성 주면 해결 가능
     */
    overflow-x: hidden;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  


`;

export default GlobalStyle;
