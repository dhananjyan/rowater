import Header from './Header/Header';
import Footer from './Footer/Footer';

import cx from "classname";
import s from "./style.module.css";

export default function HomeLayout({
    children,
    className
}) {
    return (
        <div className={s.mainParent}>
            <Header />
            <main className={cx(s.main, className)}>
                {children}
            </main>
            <Footer />
        </div>
    )
}
