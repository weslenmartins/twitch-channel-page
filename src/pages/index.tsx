import { GetStaticProps } from 'next'
import Head from 'next/head'

import Title from '../components/Title'
import Profile from '../components/Profile'
import VideoItem from '../components/VideoItem'

import { convertDate } from '../utils/date'

export default function Home({ api }) {
  const videoList = api.video_list
  const videoListHiglights = videoList.slice(0, 10)

  const clipList = api.clips_list
  const clipListHiglights = clipList.slice(0, 10)

  return (
    <>
      <Head>
        <title>{api.channel.display_name} | Twitch channel page</title>
        <meta name="description" content={api.channel.description} />
      </Head>

      <main className="container">
        <Profile
          displayName={api.channel.display_name}
          logo={api.channel.logo}
          description={api.channel.description}
          followers={api.channel.followers}
          views={api.channel.views}
          url={api.channel.url}
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
    revalidate: 86400
  }
}
