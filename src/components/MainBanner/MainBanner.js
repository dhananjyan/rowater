import Image from "next/image"
import s from "./style.module.scss"

import imgOne from "../../../public/images/one.webp"
import ContactForm from "../ContactForm/ContactForm"

export default function MainBanner() {
    return (
        <div className={s.mainBanner}>
            <div className={s.content}>
                <div className={s.bannerTextArea}>
                    <h1>Your Go-to Place For All Domestic & Commercial Water Purification Systems in Madurai</h1>
                    <p>From domestic aqua guard RO purifier installation and service to commercial water plant installation - we do everything. We also provide spare parts for all domestic & commercial water purification appliances.</p>
                </div>
                <div className={s.bannerFormArea}>
                    <ContactForm />
                </div>
            </div>
            <Image className={s.bgImg} src={imgOne} alt="Bgimage" />
        </div>
    )
}
