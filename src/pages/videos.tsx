import { GetStaticProps } from 'next'

import Head from 'next/head'
import setup from '../utils/setup'

import Title from '../components/Title'
import VideoItem from '../components/VideoItem'

export default function Videos({ api, channel }) {
  return (
    <>
      <Head>
        <title>
          Videos {channel.channel.display_name} | {setup.title}
        </title>
        <meta name="description" content={channel.channel.description} />
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
                  createdAt={video.created_at}
                  game={video.game}
                  length={video.length}
                  animatedPreviewUrl={video.thumbnails?.large[0]?.url}
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
  const response = await fetch(`${setup.project_url}/api/videos`)
  const data = await response.json()

  const responseChannel = await fetch(`${setup.project_url}/api/channel`)
  const dataChannel = await responseChannel.json()

  return {
    props: {
      api: data,
      channel: dataChannel
    },
    revalidate: 28800
  }
}
