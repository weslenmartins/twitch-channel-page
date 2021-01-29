async function channelApiClips(request, response) {
  const apiSecret = process.env.TWITCH_API_SECRET
  const nameChanel = process.env.TWITCH_NAME_CHANNEL

  const headersRequest = {
    'client-id': apiSecret
  }

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

  const clipsOnly = infoResponseChannelClips.clips

  response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

  response.json({
    clips_list: clipsOnly
  })
}

export default channelApiClips
