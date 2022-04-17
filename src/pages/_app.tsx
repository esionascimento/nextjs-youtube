import * as React from "react"
import Head from "next/head"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { CacheProvider, EmotionCache } from "@emotion/react"
import theme from "src/theme"
import createCache from "@emotion/cache"

const cache = createCache({
  key: "css",
  prepend: true
})

export default function MyApp(props: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: any
  emotionCache?: EmotionCache | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clientSideEmotionCache: any
}) {
  const { Component /* , emotionCache = clientSideEmotionCache */, pageProps } = props

  return (
    <CacheProvider value={cache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
