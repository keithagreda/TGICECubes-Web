import React from 'react'
import styles from './Hero.module.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className={styles.heroBg}>
        <div className={styles.hero}>
        <h1>NEED ICE?</h1>
        <div className={styles.heroImage}>
          <Image
            src="/ice.webp"
            alt='ice'
            width={225}
            height={225}
          />
          <div className={styles.opHoursCtr}>
            <div className={styles.openingHoursBadge}>
              <h3>open daily</h3>
              <h3>7 am to 6pm</h3>
            </div>
          </div>
        </div>
        <h2>
          TG ICE CUBES
        </h2>
      </div>
    </div>
  )
}

export default Hero