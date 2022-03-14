import { css } from 'styled-components/macro';

export const ScrollStyle = css`
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
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

export const InfinitySansBold = css`
  font-family: InfinitySans-BoldA1, serif;
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
