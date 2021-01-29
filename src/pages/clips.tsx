import { GetStaticProps } from 'next'
import Head from 'next/head'

import Title from '../components/Title'
import VideoItem from '../components/VideoItem'

import { convertDate } from '../utils/date'

export default function Clips({ api }) {
  return (
    <>
      <Head>
        <title>Clips {api.channel.display_name} | Twitch channel page</title>
        <meta name="description" content={api.channel.description} />
      </Head>

      <main className="container">
        <section>
          <Title content="All Clips" />
          <div className="videosWrapper">
            {api.clips_list.map((video, i) => {
              return (
                <VideoItem
                  key={i}
                  title={video.title}
                  views={video.views}
                  url={video.url}
                  createdAt={convertDate(video.created_at)}
                  game={video.game}
                  length={new Date(video.duration * 1000)
                    .toISOString()
                    .substr(11, 8)}
                  animatedPreviewUrl={video.vod.preview_image_url}
                  clip={true}
                />
              )
            })}
          </div>
        </section>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    'https://twitch-channel-page.vercel.app/api/channel'
  )
  const data = await response.json()

  return {
    props: {
      api: data
    },
    revalidate: 28800
  }
}
