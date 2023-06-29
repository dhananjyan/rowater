import Header from './Header/Header';
import Footer from './Footer/Footer';

import s from "./style.module.css";

export default function HomeLayout({
    children
}) {
    return (
        <div className={s.mainParent}>
            <Header />
            <main className={s.main}>
                {children}
            </main>
            <Footer />
        </div>
    )
}
