async function videosHandler({ query: { _id } }, res) {
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

  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

  const videosResult = infoResponseChannelVideos.videos

  const videosFiltered = videosResult.filter((p) => p._id === _id)

  // User with id exists
  if (videosFiltered.length > 0) {
    res.status(200).json(videosFiltered[0])
  } else {
    res.status(404).json({ message: `User with id: ${_id} not found.` })
  }
}

export default videosHandler
