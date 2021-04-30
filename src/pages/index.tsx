import { GetStaticProps } from 'next'
import Head from 'next/head'
import setup from '../utils/setup'

import Title from '../components/Title'
import Profile from '../components/Profile'
import VideoItem from '../components/VideoItem'

export default function Home({ channel, videos, clips }) {
  const videoList = videos.video_list
  const videoListHiglights = videoList.slice(0, 10)

  const clipList = clips.clips_list
  const clipListHiglights = clipList.slice(0, 10)

  return (
    <>
      <Head>
        <title>
          {channel.channel.display_name} | {setup.title}
        </title>
        <meta name="description" content={channel.channel.description} />
      </Head>

      <main className="container">
        <Profile
          displayName={channel.channel.display_name}
          logo={channel.channel.logo}
          description={channel.channel.description}
          followers={channel.channel.followers}
          views={channel.channel.views}
          url={channel.channel.url}
        />

        <section>
          <Title content="Videos" />
          <div className="videosWrapper">
            {videoListHiglights.map((video, i) => {
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

        <section>
          <Title content="Clips" />
          <div className="videosWrapper">
            {clipListHiglights.map((video, i) => {
              return (
                <VideoItem
                  key={i}
                  title={video.title}
                  views={video.views}
                  url={video.url}
                  createdAt={video.created_at}
                  game={video.game}
                  length={video.duration}
                  animatedPreviewUrl={video.vod?.preview_image_url}
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
  const response = await fetch(`${setup.project_url}/api/channel`)
  const data = await response.json()

  const responseClips = await fetch(`${setup.project_url}/api/clips`)
  const dataClips = await responseClips.json()

  const responseVideos = await fetch(`${setup.project_url}/api/videos`)
  const dataVideos = await responseVideos.json()

  return {
    props: {
      channel: data,
      videos: dataVideos,
      clips: dataClips
    },
    revalidate: 28800
  }
}
