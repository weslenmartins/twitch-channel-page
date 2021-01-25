async function channelApi(request, response) {
  const apiSecret = process.env.TWITCH_API_SECRET
  const idChannel = process.env.TWITCH_ID_CHANNEL
  const nameChanel = process.env.TWITCH_NAME_CHANNEL

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

  // Fetch Videos infos
  const infoResponseChannelVideos = await fetch(
    `https://api.twitch.tv/kraken/channels/${idChannel}/videos?limit=50`,
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

  // Fetch Clips infos
  const infoResponseChannelClips = await fetch(
    `https://api.twitch.tv/kraken/clips/top?channel=${nameChanel}&limit=30`,
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

  const videosOnly = infoResponseChannelVideos.videos
  const clipsOnly = infoResponseChannelClips.clips

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
    video_list: videosOnly,
    clips_list: clipsOnly
  })
}

export default channelApi
