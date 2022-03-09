import { css } from 'styled-components/macro';

export const ScrollStyle = css`
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: none;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #d3d3d3;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #bdbdbd;
  }
`;

export const FlexCenterRow = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlexCenterColumn = css`
  ${FlexCenterRow};
  flex-direction: column;
`;

export const FlexStartRow = css`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
