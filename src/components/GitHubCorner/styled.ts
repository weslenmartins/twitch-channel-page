import styled from 'styled-components'

export const GithubWrapper = styled.div`
  position: absolute;
  top: 0;
  border: 0;
  right: 0;
  z-index: 20;
`

export const GithubSvg = styled.svg`
  width: 50px;
  height: 50px;
  fill: var(--bg-color);
  color: white;
  cursor: pointer;
  &:hover .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
  @keyframes octocat-wave {
    0%,
    100% {
      transform: rotate(0);
    }
    20%,
    60% {
      transform: rotate(-25deg);
    }
    40%,
    80% {
      transform: rotate(10deg);
    }
  }
  @media (max-width: 500px) {
    &:hover .octo-arm {
      animation: none;
    }
    & .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }
  }
  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
`
