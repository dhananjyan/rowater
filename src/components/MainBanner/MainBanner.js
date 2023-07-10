import Image from "next/image"
import s from "./style.module.scss"

import imgOne from "../../../public/images/one.jpeg"
import ContactForm from "../ContactForm/ContactForm"

export default function MainBanner() {
    return (
        <div className={s.mainBanner}>
            <div className={s.content}>
                <div className={s.bannerTextArea}>
                    <h1>His to een can to harold, are chaste dares mirth nor, start each and little felt can he said satiety.</h1>
                    <p>Dolore sanctus gubergren magna rebum duo. Lorem accusam sanctus sea kasd rebum ipsum sed tempor. Amet ipsum dolor voluptua invidunt, diam ea magna amet elitr at et dolor et. Justo est sit sit sanctus amet magna ipsum, ea magna et stet sed et rebum lorem amet voluptua, lorem ea accusam.</p>
                </div>
                <div className={s.bannerFormArea}>
                    <ContactForm />
                </div>
            </div>
            <Image className={s.bgImg} src={imgOne} />
        </div>
    )
}
