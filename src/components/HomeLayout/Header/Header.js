"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

import cx from "classname";
import s from "./style.module.scss";

export default function Header() {
    const pathname = usePathname()

    return (
        <header className={s.header}>
            <nav className={s.headerNav}>
                <div className={s.logo}>LOGO</div>
                <ul className={s.headerNavList}>
                    <li>
                        <Link href="/" className={cx({
                            [s.active]: pathname === "/"
                        })}>Home</Link>
                    </li>
                    <li>
                        <Link href="/products" className={cx({
                            [s.active]: pathname?.includes("/products")
                        })}>Products</Link>
                        <ul>
                            <li><Link href="/products/ro-system">RO System</Link></li>
                            <li><Link href="/">RO Cabinet</Link></li>
                            <li><Link href="/">Reverse Osmosis System</Link></li>
                            <li><Link href="/">Touch Less Hand Sanitizer</Link></li>
                            <li><Link href="/">Commercial RO System</Link></li>
                            <li><Link href="/">Industrial RO System</Link></li>
                            <li><Link href="/">Water Softener</Link></li>
                            <li><Link href="/">UV Purifier</Link></li>
                            <li><Link href="/">RO Water Purifier Body</Link></li>
                            <li><Link href="/">RO Accessories</Link></li>
                            <li><Link href="/">RO Filter</Link></li>
                            <li><Link href="/">UF Membrane</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/about-us" className={cx({
                        [s.active]: pathname === "/about-us"
                    })}>About Us</Link></li>
                    <li><Link href="/contact-us" className={cx({
                        [s.active]: pathname === "/contact-us"
                    })}>Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    )
}
