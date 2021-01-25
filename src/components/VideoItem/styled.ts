import styled from 'styled-components'

export const VideoItemWrapper = styled.article`
  padding: 10px;
  border-radius: var(--border-radius);
  border: 2px solid transparent;
  font-size: 0.75rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--bg-contrast);
    border-color: var(--color-theme-light);
    box-shadow: 0 4px 25px rgba(100, 103, 244, 0.3);
    transform: translateY(-2px);
  }

  a {
    &:hover {
      color: white;
    }
  }
`

export const VideoItemThumb = styled.div`
  position: relative;
`

export const VideoItemImage = styled.div`
  overflow: hidden;
  height: 0;
  padding-top: 56.25%;
  margin-bottom: 10px;
  background: url(./404_processing_640x360.png) no-repeat center center;
  background-size: cover;
  position: relative;

  > img {
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    max-width: 100%;
    /* vertical-align: top; */

    /* &:hover {
      animation-name: thumbnail;
      animation-timing-function: steps(5, end);
      animation-duration: 5s;
      animation-iteration-count: infinite;
    } */
  }

  &.is-clip {
    > img {
      top: 0;
    }
  }

  /* @keyframes thumbnail {
    100% {
      top: -600%;
    }
  } */
`

export const VideoItemTitle = styled.h2`
  margin-bottom: 7px;
  font-size: 0.875rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`

export const VideoItemGame = styled.span`
  display: block;
  margin-bottom: 7px;
  opacity: 0.75;
`

export const VideoItemDate = styled.span`
  display: block;
  opacity: 0.75;
`

export const VideoItemTime = styled.span`
  display: block;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: calc(var(--zindex-default) + 1);
  padding: 2px 4px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: var(--border-radius);
  color: white;
  line-height: 1;
`

export const VideoItemViewers = styled.span`
  display: block;
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: calc(var(--zindex-default) + 1);
  padding: 2px 4px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: var(--border-radius);
  color: white;
  line-height: 1;
`
