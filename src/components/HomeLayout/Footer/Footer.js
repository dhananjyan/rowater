import s from './style.module.scss';
import cx from "classname";

export default function Footer() {
    return (
        <footer className={cx(s.footer, "mt-5")}>
            <div className={s.footerContent}>
                Copyrights &copy; 2023. All rights reserved.
            </div>
        </footer>
    )
}
