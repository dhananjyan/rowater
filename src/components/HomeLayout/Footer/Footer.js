import { useRouter } from 'next/router';
import s from './style.module.scss';
import cx from "classname";

export default function Footer() {
    const router = useRouter();

    const handleMenuClick = (id) => {
        const container = document.getElementById(id);
        if (container) {
            const yOffset = -100; // Replace with your desired offset
            const y = container.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
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
                                <div>Vinayaga Engineering</div>
                                <div>152/IB, Arunjunai nagar,</div>
                                <div>Avaniyapuram,</div>
                                <div> Madurai - 625012.</div>
                                <div>Mobile number: 9942188199</div>
                                <div>Email: vinayaengineeringro@gmail.com</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={"container"}>
                <div className={s.footerContent}>
                    Copyrights &copy; 2023. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
