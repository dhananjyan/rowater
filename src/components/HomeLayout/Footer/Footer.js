import s from './style.module.scss';
import cx from "classname";

export default function Footer() {
    return (
        <footer className={cx(s.footer)}>
            <div className={s.footerFirstSection}>
                <div className={"container"}>
                    <div className='row'>
                        <div className="col col-12 col-md-4 col-lg-4 my-4">
                            <h5>Company</h5>
                            <div>
                                <div className={cx("pt-2")}>Request a call back</div>
                                <div className={cx("pt-2")}>About us</div>
                                <div className={cx("pt-2")}>Product we offer</div>
                                <div className={cx("pt-2")}>Wholesale dealer of</div>
                                <div className={cx("pt-2")}>Service we undertake</div>
                            </div>
                        </div>
                        <div className="col col-12 col-md-4 col-lg-4 my-4">
                            <h5>Service</h5>
                            <div>
                                <div className={cx("pt-2")}>Water purifier service</div>
                                <div className={cx("pt-2")}>Water leakage fixing</div>
                                <div className={cx("pt-2")}>RO purifier noise & vibrations fixing</div>
                                <div className={cx("pt-2")}>Excess reject water fixing</div>
                                <div className={cx("pt-2")}>Low water flow</div>
                                <div className={cx("pt-2")}>Auto shut-off failure</div>
                                <div className={cx("pt-2")}>Bad taste of water</div>
                            </div>
                        </div>
                        <div className="col col-12 col-md-4 col-lg-4 my-4">
                            <h5>Contact us</h5>
                            <div>
                                <div>Vinayaga Engineering</div>
                                <div>152/IB, Arunjunai nagar,</div>
                                <div>Avaniyapuram,</div>
                                <div> Madurai - 625009.</div>
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
