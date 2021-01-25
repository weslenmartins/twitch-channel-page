import { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

import GlobalStyles from '../styles/globals'

function App({ Component, pageProps }: AppProps) {
  const nameChanel = process.env.TWITCH_NAME_CHANNEL

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{nameChanel} | Twitch channel page</title>

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800&display=swap"
          rel="stylesheet"
        ></link>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="icons/safari-pinned-tab.svg"
          color="#ffffff"
        />
        <meta name="msapplication-TileColor" content="#1e1b2e" />
        <meta name="theme-color" content="#1e1b2e"></meta>
      </Head>
      <GlobalStyles />
      <Header nameChannel={nameChanel} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
