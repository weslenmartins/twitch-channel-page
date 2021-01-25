import Title from '../Title'
import Social from '../Social'

import * as S from './styled'

const Profile = ({ displayName, logo, description, followers, views, url }) => {
  return (
    <S.ProfileWrapper>
      <S.ProfileAvatar>
        <img src={logo} alt={`Logotipo ${displayName}`} className="img-fluid" />
      </S.ProfileAvatar>

      <S.ProfileContent>
        <Title content={displayName} />
        <S.ProfileFollowers>
          {followers} Followers / {views} Views
        </S.ProfileFollowers>

        <S.ProfileText>
          <p>{description}</p>
          <a href={url} title="Go to Twitch page">
            Twitch page
          </a>
        </S.ProfileText>

        <Social />
      </S.ProfileContent>
    </S.ProfileWrapper>
  )
}

export default Profile
