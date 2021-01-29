async function channelApiVideos(request, response) {
  const apiSecret = process.env.TWITCH_API_SECRET
  const idChannel = process.env.TWITCH_ID_CHANNEL

  const headersRequest = {
    'client-id': apiSecret
  }

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

  const videosOnly = infoResponseChannelVideos.videos

  response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

  response.json({
    video_list: videosOnly
  })
}

export default channelApiVideos
