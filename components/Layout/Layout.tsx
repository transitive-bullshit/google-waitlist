import * as React from 'react'
import cs from 'clsx'
import localFont from 'next/font/local'

import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'

import { RootLayoutProviders } from './providers'
import styles from './styles.module.css'

const googleSans = localFont({ src: '../../public/googlesans.woff2' })

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cs(styles.container, googleSans.className)}>
      <RootLayoutProviders>
        <Header className={styles.header} />

        <main className={styles.main}>{children}</main>

        <Footer className={styles.footer} />
      </RootLayoutProviders>
    </div>
  )
}
