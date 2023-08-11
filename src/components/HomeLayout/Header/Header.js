"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useParams } from "next/navigation";

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

    const handleMenuClick = (id) => {
        setIsSideBarOpen(false)
        const container = document.getElementById(id);
        if (container) {
            const yOffset = -100; // Replace with your desired offset
            const y = container.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }

    return (
        <header className={cx(s.header, { [s.headerScrolled]: (scrollPosition > 0) })}>
            <nav className={cx(s.headerNav, { [s.sideBarOpened]: isSideBarOpen })}>
                <div className={s.logo}>
                    <img src="/logo.png" />
                    <h1>Vinayaga<br />Engineering</h1>
                </div>
                {isMobile ? <div className={s.mobileIcon} onClick={() => setIsSideBarOpen(i => !i)} role="button">
                    {isSideBarOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>}
                </div> : ""}
                <ul className={cx(s.headerNavList, { [s.showSideBar]: isSideBarOpen })}>
                    <li>
                        <Link onClick={handleMenuClick} href="/" className={cx({
                            [s.actives]: pathname === "/"
                        })}>Home</Link>
                    </li>
                    {/* <li>
                        <Link onClick={handleMenuClick}
                            href="/products"
                            className={cx({
                                [s.actives ]: pathname?.includes("/products")
                            })}>Products </Link>{!isMobile ? <span role="button" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg></span> : <span role="button" onClick={handleToggle}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg></span>}
                        <input type="checkbox" checked={toggle} className={s.hiddenToggle} />
                        {toggle && <ul>
                            <li><Link onClick={handleMenuClick} href="/products/ro-system">RO System</Link></li>
                            <li><Link onClick={handleMenuClick} href="/">RO Cabinet</Link></li>
                            <li><Link onClick={handleMenuClick} href="/">Reverse Osmosis System</Link></li>
                            <li><Link onClick={handleMenuClick} href="/">Touch Less Hand Sanitizer</Link></li>
                            <li><Link onClick={handleMenuClick} href="/">Commercial RO System</Link></li>
                            <li><Link onClick={handleMenuClick} href="/">Industrial RO System</Link></li>
                            <li><Link onClick={handleMenuClick} href="/">Water Softener</Link></li>
                            <li><Link onClick={handleMenuClick} href="/">UV Purifier</Link></li>
                            <li><Link onClick={handleMenuClick} href="/">RO Water Purifier Body</Link></li>
                            <li><Link onClick={handleMenuClick} href="/">RO Accessories</Link></li>
                            <li><Link onClick={handleMenuClick} href="/">RO Filter</Link></li>
                            <li><Link onClick={handleMenuClick} href="/">UF Membrane</Link></li>
                        </ul>}
                    </li> */}
                    <li><p role="button" onClick={() => handleMenuClick("about-us")} href="/#about-us" className={cx({
                        [s.actives]: pathname?.includes("aboutUs")
                    })}>About Us</p></li>
                    <li><p role="button" onClick={() => handleMenuClick("products")} href="#products" className={cx({
                        [s.actives]: pathname?.includes("products")
                    })}>Products</p></li>
                    <li><p role="button" onClick={() => handleMenuClick("wholesale")} href="#wholesale" className={cx({
                        [s.actives]: pathname?.includes("wholesale")
                    })}>Wholesale</p></li>
                    <li><p role="button" onClick={() => handleMenuClick("services")} href="#services" className={cx({
                        [s.actives]: pathname?.includes("services")
                    })}>Services</p></li>
                </ul>
            </nav>
        </header>
    )
}
