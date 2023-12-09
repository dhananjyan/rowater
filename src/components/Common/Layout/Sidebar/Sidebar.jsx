import Link from 'next/link'
import s from './Sidebar.module.scss'
import cx from "classname"
import { usePathname } from 'next/navigation';
import useIsMobile from '@/hooks/useIsMobile';
import useScrollPosition from '@/hooks/useScrollPosition';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Sidebar(props) {
  const { onHide } = props;
  const pathname = usePathname();
  const router = useRouter();
  // const isMobile = useIsMobile();
  // const scrollPosition = useScrollPosition();

  const [isProduct, setIsProduct] = useState(false);
  const [isIndustrialPlant, setIsIndustrialPlant] = useState(false);

  const handleMenuClick = (id) => {
    if (id && (typeof id === "string"))

      router.push("/").then(() => {
        const container = document.getElementById(id);
        onHide()
        if (container) {
          const yOffset = -100; // Replace with your desired offset
          const y = container.offsetTop + yOffset;
          console.log("ididididid", id, y, container)
          document.getElementById("scroller").scrollTo({ top: y, behavior: 'smooth' });
        }
      })
  }

  return (
    <div>
      <ul className={cx(s.headerNavList)}>
        <li>
          <Link onClick={() => handleMenuClick("/")} href="/" className={cx({
            [s.active]: pathname === "/"
          })}>Home</Link>
        </li>
        <li>
          <p
            // href="/products"
            className={cx({
              [s.active]: pathname?.includes("/products")
            })}>Products <span onClick={() => setIsProduct(v => !v)} role="button" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg></span> </p>
          {isProduct ? <ul>
            <li><Link onClick={() => handleMenuClick("/products/ro-water-purifier-madurai")} href={`/products/ro-water-purifier-madurai`}>RO Water Purifier</Link></li>
          </ul> : ""}
        </li>

        <li>
          <p
            // href="/products"
            className={cx({
              [s.active]: pathname?.includes("/industrial-ro-plant")
            })}>
            <Link onClick={() => handleMenuClick("/industrial-ro-plant")} href={`/industrial-ro-plant`}>Industrial RO Plant</Link>
            <span onClick={() => setIsIndustrialPlant(v => !v)} role="button" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg></span> </p>
          {isIndustrialPlant ? <ul>
            <li><Link onClick={() => handleMenuClick(`/industrial-ro-plant/250-lph-ro-plant`)} href={`/industrial-ro-plant/250-lph-ro-plant`}>250 Water Purifier</Link></li>
          </ul> : ""}
        </li>
        {/* <li>
          <Link role="button" onClick={() => handleMenuClick()} href="/industrial-ro-plant" className={cx({
            [s.active]: pathname?.includes("industrial-ro-plant")
          })}>Industrial RO Plant</Link>
        </li> */}
        <li>
          <p role="button" onClick={() => handleMenuClick("about-us")} href="/#about-us" className={cx({
            [s.active]: pathname?.includes("aboutUs")
          })}>About Us</p>
        </li>
        <li>
          <p role="button" onClick={() => handleMenuClick("services")} href="#services" className={cx({
            [s.active]: pathname?.includes("services")
          })}>Services</p>
        </li>
      </ul>
    </div>
  )
}
