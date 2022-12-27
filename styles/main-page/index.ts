import NextImage from 'next/image';
import styled, { css, keyframes } from 'styled-components';

import { device } from 'styles/breakpoints';

const CenterBeforeAfter = css`
  content: '';
  left: 50%;
  position: absolute;
  filter: blur(45px);
  transform: translateZ(0);
`;

const ThirteenBeforeAfter = css`
  content: '';
  position: absolute;
  z-index: -1;
`;

const rotate = keyframes`
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
`;

export const Image = NextImage;

export const Description = styled.div`
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  font-size: 0.85rem;
  max-width: var(--max-width);
  width: 100%;
  z-index: 2;
  font-family: var(--font-mono);

  @media ${device.mobile} {
    font-size: 0.8rem;
    div {
        display: flex;
        justify-content: center;
        position: fixed;
        width: 100%;
        align-items: flex-end;
        pointer-events: none;
        inset: auto 0 0;
        padding: 2rem;
        height: 200px;
        background: linear-gradient(
          to bottom,
          transparent 0%,
          rgb(var(--background-end-rgb)) 40%
        );
        z-index: 1;    
      }
    };
  }
`;

export const DescriptionLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  @media ${device.mobile} {
    padding: 1rem;

    div {
      display: flex;
      justify-content: center;
      position: fixed;
      width: 100%;
      align-items: flex-end;
      pointer-events: none;
      inset: auto 0 0;
      padding: 2rem;
      height: 200px;
      background: linear-gradient(to bottom, transparent 0%, rgb(var(--background-end-rgb)) 40%);
      z-index: 1;
    }
  }
`;

export const DescriptionP = styled.p`
  position: relative;
  margin: 0;
  padding: 1rem;
  background-color: rgba(var(--callout-rgb), 0.5);
  border: 1px solid rgba(var(--callout-border-rgb), 0.3);
  border-radius: var(--border-radius);

  @media ${device.mobile} {
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
    align-items: center;
    inset: 0 0 auto;
    padding: 2rem 1rem 1.4rem;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid rgba(var(--callout-border-rgb), 0.25);
    background: linear-gradient(
      to bottom,
      rgba(var(--background-start-rgb), 1),
      rgba(var(--callout-rgb), 0.5)
    );
    background-clip: padding-box;
    backdrop-filter: blur(24px);
  }
`;

export const Code = styled.code`
  font-weight: 700;
  font-family: var(--font-mono);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(25%, auto));
  width: var(--max-width);
  max-width: 100%;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    margin-bottom: 120px;
    max-width: 320px;
    text-align: center;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 50%);
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 4rem 0;

  ::before {
    ${CenterBeforeAfter};
    background: var(--secondary-glow);
    border-radius: 50%;
    width: 480px;
    height: 360px;
    margin-left: -400px;

    @media ${device.mobile} {
      transform: none;
      height: 300px;
    }
  }

  ::after {
    ${CenterBeforeAfter};
    background: var(--primary-glow);
    width: 240px;
    height: 180px;
    z-index: -1;
  }

  @media ${device.mobile} {
    padding: 8rem 0 6rem;
  }
`;

export const Logo = styled(NextImage)`
  position: relative;

  @media (prefers-color-scheme: dark) {
    filter: invert(1) drop-shadow(0 0 0.3rem #ffffff70);
  }
`;

export const LogoVercel = styled(NextImage)`
  filter: invert(1);

  @media (prefers-color-scheme: dark) {
    filter: invert(1);
  }
`;

export const Thirteen = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  padding: 25px 10px;
  margin-left: 16px;
  transform: translateZ(0);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0px 2px 8px -1px #0000001a;
  ::before {
    ${ThirteenBeforeAfter}
    animation: 6s ${rotate} linear infinite;
    width: 200%;
    height: 200%;
    background: var(--tile-border);

    @media (prefers-reduced-motion) {
      ::before {
        animation: none;
      }
    }
  }
  ::after {
    ${ThirteenBeforeAfter}
    inset: 0;
    padding: 1px;
    border-radius: var(--border-radius);
    background: linear-gradient(
      to bottom right,
      rgba(var(--tile-start-rgb), 1),
      rgba(var(--tile-end-rgb), 1)
    );
    background-clip: content-box;
  }

  @media (prefers-color-scheme: dark) {
    img {
      filter: invert(1) drop-shadow(0 0 0.3rem #ffffff70);
    }
  }
`;
