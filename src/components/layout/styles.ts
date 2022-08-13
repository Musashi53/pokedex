import styled, { css } from "styled-components";

interface IGridProps {
  width?: string;
  gap?: string;
}

interface IFlexProps {
  maxWidth?: string;
  align?: 'center';
  justify?: 'space-between' | 'center';
  direction?: 'row' | 'column';
  columnGap?: string;
  margin?: string;
}

export const Container = styled.div`
  max-width: 1368px;
  margin: 0 1.5rem;

  @media screen and (min-width: 1368px) { margin: auto }
`;

export const Grid = styled.div<IGridProps>`
  ${(IGridProps) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${IGridProps.width}, 1fr));
    gap: ${IGridProps.gap}
  `}
`;

export const Flex = styled.div<IFlexProps>`
  ${(IFlexProps) => css`
    width: 100%;
    max-width: ${IFlexProps.maxWidth};
    display: flex;
    flex-direction: ${IFlexProps.direction};
    justify-content: ${IFlexProps.justify};
    align-items: ${IFlexProps.align};
    margin: ${IFlexProps.margin};
    column-gap: ${IFlexProps.columnGap};
  `}
  
`;