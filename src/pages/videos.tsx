import { GetStaticProps } from 'next'

import Head from 'next/head'

import Title from '../components/Title'
import VideoItem from '../components/VideoItem'

import { convertDate } from '../utils/date'

export default function Videos({ api }) {
  return (
    <>
      <Head>
        <title>Videos {api.channel.display_name} | Twitch channel page</title>
        <meta name="description" content={api.channel.description} />
      </Head>

      <main className="container">
        <section>
          <Title content="All Videos" />
          <div className="videosWrapper">
            {api.video_list.map((video, i) => {
              return (
                <VideoItem
                  key={i}
                  title={video.title}
                  views={video.views}
                  url={video.url}
                  createdAt={convertDate(video.created_at)}
                  game={video.game}
                  length={new Date(video.length * 1000)
                    .toISOString()
                    .substr(11, 8)}
                  animatedPreviewUrl={video.animated_preview_url}
                  clip={false}
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
    revalidate: 86400
  }
}
