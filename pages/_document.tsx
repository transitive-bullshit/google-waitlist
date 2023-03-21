import * as React from 'react'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en' dir='ltr' className='light'>
      <Head>
        <link rel='shortcut icon' href='/icon.svg' />
        <link rel='icon' type='image/svg+xml' href='/icon.svg' />
      </Head>

      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  )
}
