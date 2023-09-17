import { useRouter } from 'next/router';
import s from './style.module.scss';
import cx from "classname";

export default function Footer() {
    const router = useRouter();

    const handleMenuClick = (id) => {
        const scrollTo = () => {
            const container = document.getElementById(id);
            if (container) {
                const yOffset = -100; // Replace with your desired offset
                const y = container.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
        if (router.pathname !== "/")
            router.push("/").then(() => {
                scrollTo()
            })
        else
            scrollTo()
    }
    return (
        <footer className={cx(s.footer)}>
            <div className={s.footerFirstSection}>
                <div className={"container"}>
                    <div className='row'>
                        <div className="col col-12 col-md-4 col-lg-4 my-4">
                            <h5>Company</h5>
                            <p>A water purification specialists in Madurai you can trust. At Vinayaga Engineering, we offer both commercial & domestic water purifier systems.
                            </p>
                            <div>
                                <div role="button" onClick={() => router.push('/')} className={cx("pt-2")}><span className='me-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                                </svg></span>Request a call back</div>
                                <div role="button" onClick={() => handleMenuClick("about-us")} className={cx("pt-2")}><span className='me-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                                </svg></span>About us</div>
                                <div role="button" onClick={() => handleMenuClick("products")} className={cx("pt-2")}><span className='me-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                                </svg></span>Product we offer</div>
                                <div role="button" onClick={() => handleMenuClick("wholesale")} className={cx("pt-2")}><span className='me-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                                </svg></span>Wholesale dealer of</div>
                                <div role="button" onClick={() => handleMenuClick("services")} className={cx("pt-2")}><span className='me-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                                </svg></span>Service we undertake</div>
                            </div>
                        </div>
                        <div className="col col-12 col-md-4 col-lg-4 my-4">
                            <h5>Location we serve</h5>
                            <div>
                                <div className={cx("pt-2")}>Madurai</div>
                                <div className={cx("pt-2")}>Dindigul</div>
                                <div className={cx("pt-2")}>Sivagangai</div>
                                <div className={cx("pt-2")}>Virudhunagar</div>
                                <div className={cx("pt-2")}>Theni</div>
                                <div className={cx("pt-2")}>Ramanathapuram</div>
                                <div className={cx("pt-2")}>Tirunelveli</div>
                            </div>
                        </div>
                        <div className="col col-12 col-md-4 col-lg-4 my-4">
                            <h5>Contact us</h5>
                            <div>

                                <div className='d-flex gap-2 mt-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" mt-1 bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg>
                                    <div>
                                        <div>Vinayaga Engineering</div>
                                        <div>152/IB, Arunjunai nagar,</div>
                                        <div>Avaniyapuram,</div>
                                        <div> Madurai - 625012.</div>
                                    </div>
                                </div>

                                <div className='d-flex gap-2 mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-1 bi bi-telephone-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                    </svg>
                                    <div>
                                        9942188199
                                    </div>
                                </div>

                                <div className='d-flex gap-2 mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-1 bi bi-envelope-fill" viewBox="0 0 16 16">
                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                    </svg>
                                    <div>
                                        vinayaengineeringro@gmail.com
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <div className={"container"}>
                    <div className={s.footerContent}>
                        Copyrights &copy; 2023. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}
