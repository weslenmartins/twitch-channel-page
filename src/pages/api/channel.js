import setup from '../../utils/setup'

async function channelApi(request, response) {
  const apiSecret = process.env.TWITCH_API_SECRET
  const idChannel = process.env.TWITCH_ID_CHANNEL

  const headersRequest = {
    'client-id': apiSecret
  }

  // Fetch Channel infos
  const infoResponseChannel = await fetch(
    `https://api.twitch.tv/kraken/channels/${idChannel}`,
    {
      headers: {
        ...headersRequest,
        accept: 'application/vnd.twitchtv.v5+json'
      }
    }
  )
    .then((resp) => {
      return resp.json()
    })
    .catch((err) => {
      console.log(err)
    })

  const displayName = infoResponseChannel.display_name
  const logo = infoResponseChannel.logo
  const description = infoResponseChannel.description
  const followers = infoResponseChannel.followers
  const views = infoResponseChannel.views
  const url = infoResponseChannel.url

  response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

  response.json({
    channel: {
      display_name: displayName,
      logo: logo,
      description: description,
      followers: followers,
      views: views,
      url: url
    },
    videos: `${setup.project_url}/api/videos`,
    clips: `${setup.project_url}/api/clips`
  })
}

export default channelApi
