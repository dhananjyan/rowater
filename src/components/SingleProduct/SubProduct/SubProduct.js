import cx from "classname";
import Image from "next/image";
import s from "./SubProduct.module.scss";
import { Button } from "react-bootstrap";

export default function SubProduct() {
    return (<div className={cx("container")}>
        <div className={cx("row", s.main)}>

            <div className={cx("col col-12 col-md-6")}>
                <div className={cx(s.imageContainer)}>
                    <Image src={"/Logo.png"} fill />
                </div>
            </div>

            <div className={cx("col col-12 col-md-6")}>

                <div className={cx(s.detailsPart)}>
                    <h1 className={s.productName}>250 LPH Inustrial RO Water Plant</h1>
                    <span className={cx(s.underLine, "mt-3")}></span>
                    <h2 className={cx(s.price, "pt-4")}>
                        ₹ 1,00,000 (+Taxes)
                    </h2>
                    <p className={cx("pt-3", s.text)}>Short description about this product</p>
                    <div
                        className={cx(s.deatailsSection)}
                    >
                        <div className={s.detailsItem}>
                            <div className={s.label}>Availability:</div>
                            <div className={s.text}>In Stock</div>
                        </div>
                        <div className={s.detailsItem}>
                            <div className={s.label}>Purifier Type:</div>
                            <div className={s.text}>In Stock</div>
                        </div>
                        <div className={s.detailsItem}>
                            <div className={s.label}>Capacity:</div>
                            <div className={s.text}>250 Liters Per Hour</div>
                        </div>
                        <div className={s.detailsItem}>
                            <div className={s.label}>For Use:</div>
                            <div className={s.text}>Industrial/Commercial</div>
                        </div>
                    </div>
                    <Button className={cx(s.btn, "mt-4")}>Need a new quote?</Button>

                    <div>
                        <div className={cx(s.subTitle, "pt-4")}>Product description</div>
                        <div className={cx(s.text, "pt-3")}>250 LPH (Liters Per Hour) Industrial Reverse Osmosis (RO) plan is a vital water treatment system used across various industries.  Its designed to purify and filter water on a large scale, ensuring the removal of impurities, contaminants and dissolved solids to produce hight-quality, potable water for commercial purposes.</div>
                        <div className={cx(s.text, "pt-3")}>The 250 LPH capacity makes it suitable for small to medium-sized industrial applications, such as food and beverage processing, pharmaceutical manufacturing, or boiler feed water preparation.</div>
                    </div>

                    <div>
                        <div className={cx(s.subTitle, "pt-4")}>Specification   </div>

                        <div
                            className={cx(s.deatailsSection)}
                        >
                            <div className={s.detailsItem}>
                                <div className={s.label}>Product:</div>
                                <div className={s.text}>250 LPH RO Plant</div>
                            </div>
                            <div className={s.detailsItem}>
                                <div className={s.label}>Vessel Material:</div>
                                <div className={s.text}>FPH</div>
                            </div>
                            <div className={s.detailsItem}>
                                <div className={s.label}>TDS Level:</div>
                                <div className={s.text}>Up to 3000</div>
                            </div>
                            <div className={s.detailsItem}>
                                <div className={s.label}>Power:</div>
                                <div className={s.text}>0.5 HP</div>
                            </div>
                            <div className={s.detailsItem}>
                                <div className={s.label}>Operating Pressure:</div>
                                <div className={s.text}>100 PSI</div>
                            </div>
                            <div className={s.detailsItem}>
                                <div className={s.label}>Water Source:</div>
                                <div className={s.text}>Bore Well or Stored Water</div>
                            </div>
                            <div className={s.detailsItem}>
                                <div className={s.label}>Pump Brand:</div>
                                <div className={s.text}>CRI, ALGO, SPEED</div>
                            </div>
                            <div className={s.detailsItem}>
                                <div className={s.label}>Warranty:</div>
                                <div className={s.text}>1 Yr For Electric & Electronic Spares</div>
                            </div>
                            <div className={s.detailsItem}>
                                <div className={s.label}>Maintenance:</div>
                                <div className={s.text}>3 Times a Year</div>
                            </div>
                            <div className={s.detailsItem}>
                                <div className={s.label}>Installation time:</div>
                                <div className={s.text}>~2 Hours</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={cx(s.subTitle, "pt-4")}>Spares for 250 LPH RO Plant</div>
                        <ul className="pt-3">
                            <li>Raw Water Pump</li>
                            <li>10*54 High Pressure Vessel</li>
                            <li>High Pressure Pump</li>
                            <li>Micron Filters</li>
                            <li>Flow Meter</li>
                            <li>Dosing Pump & Liquid</li>
                            <li>Activated Carbon and Silex</li>
                            <li>Float Value</li>
                            <li>Multiport Value</li>
                            <li>Pipelines</li>
                        </ul>
                    </div>
                    <div>
                        <div className={cx(s.subTitle, "pt-4")}>How 250 LPH RO Plant Works?</div>

                        <div className={cx(s.text, "pt-3")}>Any 250 LPH Reverse Osmosis Plant works by purifying water by forcing it through a semipermeable membrane.  Initially, Pre-filtration eliminates large particles.</div>

                        <div className={cx(s.text, "pt-3")}>Then, a high-pressure pump pushes the water through the RO membrane, allowing only pure water molecules to pass while trapping impurities.  The purified water is collected, and the rejected impurities are discharged as waste water.</div>
                        <div className={cx(s.text, "pt-3")}>To make it short, the process as follows:</div>

                        <ul className="pt-3">
                            <li>Pre-filtration</li>
                            <li>Pressurization of pre-filtered water</li>
                            <li>Reverse Osmosis</li>
                            <li>Purified water collection</li>
                            <li>Waste water discharge</li>
                            <li>Post-Treatment</li>
                        </ul>
                    </div>
                    <div>
                        <div className={cx(s.subTitle, "pt-4")}>Ratings & Reviews</div>

                        <div className={cx(s.text, "pt-3")}>Any 250 LPH Reverse Osmosis Plant works by purifying water by forcing it through a semipermeable membrane.  Initially, Pre-filtration eliminates large particles.</div>

                        <div className={cx(s.text, "pt-3")}>Then, a high-pressure pump pushes the water through the RO membrane, allowing only pure water molecules to pass while trapping impurities.  The purified water is collected, and the rejected impurities are discharged as waste water.</div>
                        <div className={cx(s.text, "pt-3")}>To make it short, the process as follows:</div>

                        <ul className="pt-3">
                            <li>Pre-filtration</li>
                            <li>Pressurization of pre-filtered water</li>
                            <li>Reverse Osmosis</li>
                            <li>Purified water collection</li>
                            <li>Waste water discharge</li>
                            <li>Post-Treatment</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
