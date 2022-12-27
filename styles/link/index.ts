import styled from 'styled-components';

import { device } from 'styles/breakpoints';

export const CardLink = styled.a`
  padding: 1rem 1.2rem;
  border-radius: var(--border-radius);
  background: rgba(var(--card-rgb), 0);
  border: 1px solid rgba(var(--card-border-rgb), 0);
  transition: background 200ms, border 200ms;

  @media (hover: hover) and (pointer: fine) {
    :hover {
      background: rgba(var(--card-rgb), 0.1);
      border: 1px solid rgba(var(--card-border-rgb), 0.15);
    }

    :hover span {
      transform: translateX(4px);
    }
  }

  @media ${device.mobile} {
    margin-bottom: 0.5rem;
  }
`;

export const CardSpan = styled.span`
  display: inline-block;
  transition: transform 200ms;

  @media (prefers-reduced-motion) {
    :hover {
      transform: none;
    }
  }
`;

export const CardH2 = styled.h2`
  font-weight: 600;
  margin-bottom: 0.7rem;

  @media ${device.mobile} {
    padding: 1rem 2.5rem;
  }
`;

export const CardP = styled.p`
  margin: 0;
  opacity: 0.6;
  font-size: 0.9rem;
  line-height: 1.5;
  max-width: 30ch;
`;
