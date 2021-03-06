import { GetStaticProps } from 'next'
import Head from 'next/head'
import setup from '../utils/setup'

import Title from '../components/Title'
import Profile from '../components/Profile'

export default function ProfilePage({ api }) {
  return (
    <>
      <Head>
        <title>
          Profile {api.channel.display_name} | {setup.title}
        </title>
        <meta name="description" content={api.channel.description} />
      </Head>

      <main className="container">
        <Title content="Profile" />
        <Profile
          displayName={api.channel.display_name}
          logo={api.channel.logo}
          description={api.channel.description}
          followers={api.channel.followers}
          views={api.channel.views}
          url={api.channel.url}
        />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${setup.project_url}/api/channel`)
  const data = await response.json()

  return {
    props: {
      api: data
    },
    revalidate: 28800
  }
}
