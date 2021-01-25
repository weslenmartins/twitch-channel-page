import styled from 'styled-components'

export const ProfileWrapper = styled.section`
  display: flex;
  margin-bottom: 25px;
  padding: 25px 20px;
  border: 1px solid var(--bg-contrast);
  border-radius: var(--border-radius);

  @media (min-width: 992px) {
    margin-bottom: 65px;
  }
`

export const ProfileAvatar = styled.section`
  flex: 0 0 60px;
  margin-right: 30px;

  > img {
    border-radius: 100%;
  }

  @media (min-width: 992px) {
    flex: 0 0 120px;
  }
`

export const ProfileFollowers = styled.div`
  display: block;
  margin-bottom: 15px;
  font-weight: var(--font-weight-bold);
`

export const ProfileContent = styled.div`
  font-size: 0.875rem;
`

export const ProfileText = styled.div`
  margin-bottom: 15px;

  > p {
    line-height: 1.3;

    &:not(:last-child) {
      margin-bottom: 7px;
    }

    @media (min-width: 992px) {
      line-height: 1.6;
    }
  }
`
