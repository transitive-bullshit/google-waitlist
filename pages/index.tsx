import * as React from 'react'
import cs from 'clsx'
import TypeIt from 'typeit-react'

import * as config from '@/lib/config'
import { HeroButton } from '@/components/HeroButton/HeroButton'
import { Layout } from '@/components/Layout/Layout'
import { PageHead } from '@/components/PageHead/PageHead'

import styles from './index.module.css'

const waitlistUrl =
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'

const phrases = [
  // 'can help you finish your art studio tagline: craft, create, and ...',
  // 'can suggest more high-protein options to add to your vegan diet',
  // 'can explain why lightning might strike the same place twice',
  // 'can outline your blog post about summer mocktail recipes',
  // 'can explain why large language models might make mistakes',
  // 'can help you get started on writing your first novel',
  // 'can draft a packing list for your weekend fishing and camping trip',
  'can help you draft the perfect resignation letter from Google',
  'can help you create a website mocking Google\'s waitlist "launches"',
  'can write a blog post about how "don\'t be evil" got lost along the way',
  'can suggest better hosted APIs from OpenAI, Cohere, and Hugging Face',
  'can help you check your email for other Google waitlists ...',
  'can suggest open source alternatives to expensive Google products',
  "helps you reduce anxiety by knowing you'll never get off the waitlist",
  'can do a fraction of the cool stuff that ChatGPT could do 3 months ago'
]

const longestPhrase = phrases.reduce(
  (acc, phrase) => (phrase.length > acc.length ? phrase : acc),
  ''
)

export default function HomePage() {
  return (
    <Layout>
      <PageHead />

      <div className={styles.homePage}>
        <div className={styles.body}>
          <div className={cs(styles.section)}>
            <div className={cs(styles.hero)}>
              <div className={styles.titleWrapper}>
                <h1 className={cs(styles.title, styles.sizingHack)}>
                  <b>Bard</b> {longestPhrase}
                </h1>

                <h1 className={styles.title}>
                  <b>Bard</b>{' '}
                  <TypeIt
                    options={{
                      loop: true,
                      cursor: false,
                      strings: phrases,
                      breakLines: false,
                      speed: 25,
                      deleteSpeed: 0,
                      nextStringDelay: [5000, 0] as any
                    }}
                    className={styles.subtitle}
                  />
                </h1>
              </div>

              <p className={styles.desc}>{config.description}</p>

              <HeroButton
                href={waitlistUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                Join the Waitlist
              </HeroButton>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
