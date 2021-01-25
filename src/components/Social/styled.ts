import styled from 'styled-components'

export const Social = styled.ul`
  @media (min-width: 992px) {
    display: flex;
    justify-content: flex-start;
  }
`

export const SocialItem = styled.li`
  padding: 5px 0;
  font-size: 0.875rem;
  font-weight: var(--font-weight-bold);

  @media (min-width: 992px) {
    padding: 0;

    &:not(:last-child) {
      margin-right: 25px;
    }
  }
`
