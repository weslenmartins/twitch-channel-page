## Twitch channel page

Next.Js framework study project, creating an internal API that feeds on Twtich API data.

Creating a page that lists the videos and clips along with the channel profile.

## Getting Started
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To configure the connection with the Twitch API, you need to rename the file `example_env` to `.env`

In this file it is necessary to define the secret API authentication key, channel ID and channel name.

```
TWITCH_API_SECRET=CODE_HERE
TWITCH_ID_CHANNEL=CODE_HERE
TWITCH_NAME_CHANNEL=CODE_HERE
```

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Social networks

Edite o arquivo `src\utils\social-network.js` para definir o menu de redes sociais do canal, o sistema irá preencher automaticamente os menus internos
