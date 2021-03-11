import Link from 'next/link'

import { convertDate } from '../../utils/date'

import * as S from './styled'

type VideoItemProps = {
  title: string
  url: string
  views: number
  createdAt: string
  game: string
  length: number
  animatedPreviewUrl?: string
  clip?: boolean
}

const VideoItem = ({
  title,
  url,
  views,
  createdAt,
  game,
  length,
  animatedPreviewUrl,
  clip
}: VideoItemProps) => {
  return (
    <S.VideoItemWrapper>
      <Link href={url}>
        <a title={`Watch now: ${title}`}>
          <S.VideoItemThumb>
            <S.VideoItemImage className={`${clip ? 'is-clip' : 'is-video'}`}>
              <img
                src={
                  animatedPreviewUrl
                    ? animatedPreviewUrl
                    : '/404_processing_640x360.png'
                }
                alt={`Thumbnail ${title}`}
              />
              <S.VideoItemTime>
                {new Date(length * 1000).toISOString().substr(11, 8)}
              </S.VideoItemTime>
              <S.VideoItemViewers>{views}</S.VideoItemViewers>
            </S.VideoItemImage>
          </S.VideoItemThumb>
          <S.VideoItemTitle>{title}</S.VideoItemTitle>
          <S.VideoItemGame>{game}</S.VideoItemGame>
          <S.VideoItemDate>{convertDate(createdAt)}</S.VideoItemDate>
        </a>
      </Link>
    </S.VideoItemWrapper>
  )
}

export default VideoItem
