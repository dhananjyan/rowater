import Image from "next/image"
import s from "./Sidebar.module.scss"
import Link from "next/link"
export default function Sidebar() {
    return (
        <div className={s.sidebar}>
            <div className={s.title}>
                <div className={s.logo}>
                    {/* <Image width={100} height={60} alt='LOGO' src="/logo.png" />
                    <h1>Vinayaga<br />Engineering</h1> */}
                    <div>
                        <Link href={"/be-admin/category"}>Category</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
