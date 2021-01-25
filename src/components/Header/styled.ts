import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  margin-bottom: 40px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: var(--bg-header);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font-weight: var(--font-weight-bold);

  @media (min-width: 992px) {
    > .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`

export const Logo = styled.h1`
  > a {
    color: white;
    font-size: 1.188rem;

    &:hover,
    &:focus {
      color: var(--color-header-hover);
    }
  }
`

export const Nav = styled.nav`
  > ul {
    display: flex;
    justify-content: space-between;

    > li {
      padding: 1rem 0;
      font-size: 0.875rem;

      > a {
        color: #b7b7bf;

        &:hover,
        &:focus {
          color: var(--color-header-hover);
        }
      }
    }

    @media (min-width: 992px) {
      justify-content: flex-end;

      > li {
        padding: 1rem 1.15rem;
      }
    }
  }
`
