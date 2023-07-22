"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import cx from "classname";
import s from "./style.module.scss";

import useIsMobile from "@/hooks/useIsMobile";
import useScrollPosition from "@/hooks/useScrollPosition";

export default function Header() {
    const pathname = usePathname();
    const isMobile = useIsMobile();
    const scrollPosition = useScrollPosition();
    const [toggle, setToggle] = useState(true);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const handleToggle = () => {
        if (!isMobile) return;
        setToggle(i => !i);
    };

    useEffect(() => {
      setToggle(isMobile ? false : true)
    }, [isMobile])
    


    return (
        <header className={cx(s.header, { [s.headerScrolled]: (scrollPosition > 0) })}>
            <nav className={cx(s.headerNav, { [s.sideBarOpened]: isSideBarOpen })}>
                <div className={s.logo}>LOGO</div>
                {isMobile ? <div className={s.mobileIcon} onClick={() => setIsSideBarOpen(i => !i)} role="button">
                    {isSideBarOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>}
                </div> : ""}
                <ul className={cx(s.headerNavList, { [s.showSideBar]: isSideBarOpen })}>
                    <li>
                        <Link href="/" className={cx({
                            [s.active]: pathname === "/"
                        })}>Home</Link>
                    </li>
                    <li>
                        <Link
                            href="/products"
                            className={cx({
                                [s.active]: pathname?.includes("/products")
                            })}>Products </Link>{!isMobile ? <span role="button" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg></span> : <span role="button" onClick={handleToggle}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg></span>}
                        <input type="checkbox" checked={toggle} className={s.hiddenToggle} />
                        {toggle && <ul>
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
                        </ul>}
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
