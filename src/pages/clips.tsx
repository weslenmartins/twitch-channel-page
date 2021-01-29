import { GetStaticProps } from 'next'
import Head from 'next/head'
import setup from '../utils/setup'

import Title from '../components/Title'
import VideoItem from '../components/VideoItem'

import { convertDate } from '../utils/date'

export default function Clips({ api, channel }) {
  return (
    <>
      <Head>
        <title>
          Clips {channel.channel.display_name} | {setup.title}
        </title>
        <meta name="description" content={channel.channel.description} />
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
  const response = await fetch(`${setup.project_url}/api/clips`)
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
