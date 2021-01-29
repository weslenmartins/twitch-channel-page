async function clipsHandler({ query: { slug } }, res) {
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

  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

  const clipsResult = infoResponseChannelClips.clips

  const clipsFiltered = clipsResult.filter((p) => p.slug === slug)

  // User with id exists
  if (clipsFiltered.length > 0) {
    res.status(200).json(clipsFiltered[0])
  } else {
    res.status(404).json({ message: `User with id: ${slug} not found.` })
  }
}

export default clipsHandler
