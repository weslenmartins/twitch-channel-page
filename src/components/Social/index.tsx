import setup from '../../utils/setup'

import * as S from './styled'

const Social = () => {
  return (
    <S.Social>
      {setup.social_network.map((link, i) => {
        return (
          <S.SocialItem key={i}>
            <a
              href={link.url}
              title={`Acessar agora ${link.title}`}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          </S.SocialItem>
        )
      })}
    </S.Social>
  )
}

export default Social
