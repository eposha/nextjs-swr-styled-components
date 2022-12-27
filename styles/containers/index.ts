import styled, { css } from 'styled-components';

interface IFlexCenterContainer {
  width?: string;
  height?: string;
}

const FlexCenter = css<IFlexCenterContainer>`
  display: flex;
  justify-content: center;
  width: ${(p) => p.width ?? '100%'};
  min-width: ${(p) => p.width ?? '390px'};
  ${({ height }) => height && `height: ${height}`};
`;

export const FlRowCenterContainer = styled.div<IFlexCenterContainer>`
  ${FlexCenter};
`;

export const FlCenterContainer = styled(FlRowCenterContainer)<IFlexCenterContainer>`
  align-items: center;
`;

export const FlColumnCenterContainer = styled(FlRowCenterContainer)<IFlexCenterContainer>`
  align-items: center;
  flex-direction: column;
`;
