import React from 'react'
import styles from './About.module.css'
import Image from 'next/image'

export const About = () => {
  return (
    <div className={`${styles.container}  ${styles.testBorder}`}>
        <div className={`${styles.content}`}>
            <h3>
                OUR STORY
            </h3>
            <h2>
                Creating clean, crystal ice from the beginning.
            </h2>
            <p>
                At TgIce, we believe that great ice starts long before it freezes.
                What began as a small idea quickly grew into a commitment: to provide clean, food-grade ice that brings peace of mind to every drink it touches.
                With careful purification and thoughtful craftsmanship, we create ice that’s crystal clear, safe, and consistently reliable—made with the kind of care you can taste.
            </p>
        </div>
        <div className="image">
            <Image
                src="https://fastly.picsum.photos/id/54/3264/2176.jpg?hmac=blh020fMeJ5Ru0p-fmXUaOAeYnxpOPHnhJojpzPLN3g"
                alt='ice delivery'
                width={500}
                height={500}
            >
            </Image>
        </div>

    </div>
  )
}
