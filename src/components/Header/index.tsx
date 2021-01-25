import Link from 'next/link'

import * as S from './styled'

function Header({ nameChannel }) {
  return (
    <S.HeaderWrapper>
      <div className="container">
        <S.Logo>
          <Link href="/">
            <a title="Home page">Channel page</a>
          </Link>
        </S.Logo>
        <S.Nav>
          <ul>
            <li>
              <Link href="/videos/">
                <a title="Go to All Videos">Videos</a>
              </Link>
            </li>
            <li>
              <Link href="/clips/">
                <a title="Go to All Clips">Clips</a>
              </Link>
            </li>
            <li>
              <Link href="/profile/">
                <a title="Go to Profile page">Profile</a>
              </Link>
            </li>
            <li>
              <a
                href={`//www.twitch.tv/${nameChannel}`}
                title={`Go to Twitch Channel ${nameChannel}`}
                target="_blank"
                rel="noreferrer"
              >
                Twitch
              </a>
            </li>
          </ul>
        </S.Nav>
      </div>
    </S.HeaderWrapper>
  )
}

export default Header
