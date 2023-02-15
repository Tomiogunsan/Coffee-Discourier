import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel='preload'
      href='/fonts/IBMPlexs'
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
