import Link from 'next/link'

import * as S from './styled'

const VideoItem = ({
  title,
  url,
  views,
  createdAt,
  game,
  length,
  animatedPreviewUrl,
  clip
}) => {
  return (
    <S.VideoItemWrapper>
      <Link href={url}>
        <a title={`Watch ${title}`}>
          <S.VideoItemThumb>
            <S.VideoItemImage className={`${clip ? 'is-clip' : ''}`}>
              <img src={animatedPreviewUrl} alt={`Thumbnail ${title}`} />
              <S.VideoItemTime>{length}</S.VideoItemTime>
              <S.VideoItemViewers>{views}</S.VideoItemViewers>
            </S.VideoItemImage>
          </S.VideoItemThumb>
          <S.VideoItemTitle>{title}</S.VideoItemTitle>
          <S.VideoItemGame>{game}</S.VideoItemGame>
          <S.VideoItemDate>{createdAt}</S.VideoItemDate>
        </a>
      </Link>
    </S.VideoItemWrapper>
  )
}

export default VideoItem
