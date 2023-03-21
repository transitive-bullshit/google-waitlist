import * as React from 'react'
import cs from 'clsx'
import Link from 'next/link'

import * as config from '@/lib/config'
import { Discord, GitHub, Twitter } from '@/icons/index'

import { Logo } from './Logo'
import styles from './styles.module.css'

export const Header: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <header className={cs(styles.header, className)}>
      <div className={styles.navHeader}>
        <Link href='/' className={styles.action} aria-label='Logo'>
          <Logo />
        </Link>

        <div className={styles.rhs}>
          <a
            href='https://bard.google.com'
            className={styles.action}
            target='_blank'
            rel='noopener noreferrer'
          >
            Official Bard Waitlist
          </a>

          <a
            className={cs(styles.discord, styles.social)}
            href={config.discordUrl}
            title='Discord'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Discord />
          </a>

          <a
            className={cs(styles.twitter, styles.social)}
            href={config.twitterUrl}
            title={`Twitter ${config.twitter}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Twitter />
          </a>

          <a
            className={cs(styles.github, styles.social)}
            href={config.githubRepoUrl}
            title='View source on GitHub'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHub />
          </a>
        </div>
      </div>
    </header>
  )
}
