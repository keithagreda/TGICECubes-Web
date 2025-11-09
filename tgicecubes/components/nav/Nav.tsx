import React from 'react'
import styles from './Nav.module.css'
import Image from 'next/image'
import NavHamburger from '../navHamburger/NavHamburger'

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <div className={`${styles.outline}`}>
        <Image
          src="/tgice.svg"
          alt='tgice logo'
          width={150}
          height={150}
        />
      </div>

      <div className={`${styles.hamburgerContainer}`}>
        <NavHamburger/>
      </div>
    </div>
  )
}

export default Nav