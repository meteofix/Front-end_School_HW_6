import styled, { css } from 'styled-components';

export const VideoMetaContainer = styled.div`
  color: ${(props) => props.theme.textColor};
  flex: 0 0 auto;
  font-weight: normal;
  margin-bottom: 0px;
  word-break: break-word;
  margin-right: 150px;
  ${(props) =>
    props.mobile &&
    css`
      color: white;
      margin-right: 0;
    `}
`;
