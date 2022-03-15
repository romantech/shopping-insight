import styled, { css } from 'styled-components/macro';

export const ScrollStylePC = css`
  /* 정밀 포인팅 장치를 위한(터치가 아닌 장치) CSS */
  @media screen and (any-pointer: fine) {
    /* width */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: rgba(232, 232, 232, 0.76);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #d3d3d3;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #bdbdbd;
    }
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

export const EmptyElement = styled.div<{ [key in string]?: string }>`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
`;
