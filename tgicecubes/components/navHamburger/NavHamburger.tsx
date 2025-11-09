"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styles from './NavHamburger.module.css'

export default function NavHamburger() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (isOpen && !target.closest(`.${styles.menuLink}`)) {
                closeMenu();
            }
        };

        if(isOpen){
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [isOpen]);

    return (
        <div>
            {/* Desktop Links */}
            <div className={styles.desktopLinks}>
            {['About', 'Products', 'Delivery', 'Contact'].map((item) => (
                <a 
                key={item}
                href={`/${item.toLowerCase()}`}
                className={styles.desktopLink}
                >
                {item}
                </a>
            ))}
            </div>

            <div className={styles.container}>
                {/* Hamburger Button */}
                <button
                onClick={toggleMenu}
                aria-label="Toggle menu"
                className={styles.hamburger}
                >
                <span className={`${styles.line} ${isOpen ? styles.lineOpen : ''}`}></span>
                <span className={`${styles.line} ${isOpen ? styles.lineOpen : ''}`}></span>
                <span className={`${styles.line} ${isOpen ? styles.lineOpen : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
                {['About', 'Products', 'Delivery', 'Contact'].map((item) => (
                <a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    onClick={closeMenu}
                    className={styles.menuLink}
                >
                    {item}
                </a>
                ))}
            </div>
        </div>
    )
}
