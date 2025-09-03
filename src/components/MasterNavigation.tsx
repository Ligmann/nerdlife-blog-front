"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./MasterNavigation.module.css";
import Link from "next/link";
import clsx from "clsx";

export default function MasterNavigation() {
    const [isOpen, setIsOpen] = useState(false);

    const linksNavigation = [
        { text: "Wszystkie artykuły", link: "/about" },
        { text: "Tematy", link: "/contact" },
        { text: "O autorze", link: "/contact" },
    ];

    function burgerMenuButton() {
        setIsOpen((prev) => !prev);
    }

    return (
        <>
            <header className={clsx(styles.header, isOpen && styles.mobActive)}>
                <div className={styles.leftColumn}>
                    <Link href="/" className={styles.logo}>
                        <Image src="/logo.svg" alt="dd" width={120} height={40} priority />
                    </Link>

                    <button
                        type="button"
                        className={styles.burgerMenu}
                        onClick={burgerMenuButton}
                    >
                        <span className={styles.burgerMenuItem} />
                        <span className={styles.burgerMenuItem} />
                        <span className={styles.burgerMenuItem} />
                    </button>
                </div>

                <nav id="main-nav" className={clsx(styles.nav)}>
                    <ul className={styles.ul}>
                        {linksNavigation.map((item) => (
                            <li key={item.text} className={styles.li}>
                                <Link href={item.link} className={styles.link}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <span className={styles.navSpace} />
        </>
    );
}
