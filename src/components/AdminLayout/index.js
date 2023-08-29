import React from 'react'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

import s from "./AdminLayout.module.scss"
import DotLoader from '../DotLoader/DotLoader'
import { useSelector } from 'react-redux'

export default function AdminLayout({ children }) {
    const isLoading = useSelector(state => state?.admin?.isLoading)
    return (
        <DotLoader show={isLoading}>
            <div className={s.dashboard}>
                <Sidebar />
                <div className={s.main}>
                    {/* <Header /> */}
                    <div className={"container-fluid"}>{children}</div>
                </div>
            </div>
        </DotLoader>
    )
}
