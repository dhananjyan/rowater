"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import cx from "classname";
import s from "./style.module.scss";

import useIsMobile from "@/hooks/useIsMobile";
import useScrollPosition from "@/hooks/useScrollPosition";
import { useRouter } from "next/router";


import data from "../../../../../assets/data.json";
import Image from "next/image";

export default function Header({ isSideBarOpen, setIsSideBarOpen }) {
    const pathname = usePathname();
    const router = useRouter();
    const isMobile = useIsMobile();
    const scrollPosition = useScrollPosition();


    const handleMenuClick = (id) => {
        if (id && (typeof id === "string"))

            router.push("/").then(() => {
                const container = document.getElementById(id);
                // onHide()
                if (container) {
                    const yOffset = -100; // Replace with your desired offset
                    const y = container.offsetTop + yOffset;
                    console.log("ididididid", id, y, container)
                    document.getElementById("scroller").scrollTo({ top: y, behavior: 'smooth' });
                }
            })
    }

    return (
        <header className={cx(s.header, { [s.headerScrolled]: (scrollPosition > 0) })}>
            <nav className={cx(s.headerNav, "container py-2", { [s.sideBarOpened]: isSideBarOpen })}>
                <div className={s.logo}>
                    <Image width={100} height={60} alt='LOGO' src="/logo.png" />
                    <h1>Vinayaga<br />Engineering</h1>
                </div>
                {isMobile ? <div className={s.mobileIcon} onClick={() => setIsSideBarOpen(i => !i)} role="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </div> : ""}
                <ul className={cx(s.headerNavList, { [s.showSideBar]: isSideBarOpen })}>
                    <li>
                        <Link onClick={() => handleMenuClick("/")} href="/" className={cx({
                            [s.actives]: pathname === "/"
                        })}>Home</Link>
                    </li>
                    <li>
                        <p
                            className={cx({
                                [s.actives]: pathname?.includes("/products")
                            })}>Products </p> <span role="button" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg></span>
                        <ul>
                            {data?.product?.map((item, i) => i != 0 ? "" : <li key={`PRODUCT_LIST_${i}`}><Link onClick={() => handleMenuClick("")} href={`/products/${item?.slug}`}>{item?.name}</Link></li>)}
                        </ul>
                    </li>
                    <li><Link role="button" onClick={() => handleMenuClick("")} href="/industrial-ro-plant" className={cx({
                        [s.actives]: pathname?.includes("industrial-ro-plant")
                    })}>Industrial RO Plant</Link></li>
                    <li><p role="button" onClick={() => handleMenuClick("about-us")} href="/#about-us" className={cx({
                        [s.actives]: pathname?.includes("aboutUs")
                    })}>About Us</p></li>
                    <li><p role="button" onClick={() => handleMenuClick("services")} href="#services" className={cx({
                        [s.actives]: pathname?.includes("services")
                    })}>Services</p></li>
                </ul>
            </nav>
        </header>
    )
}
