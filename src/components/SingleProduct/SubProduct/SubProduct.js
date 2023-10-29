import cx from "classname";
import Image from "next/image";
import s from "./SubProduct.module.scss";
import { Button } from "react-bootstrap";
import ContactForm from '@/components/ContactForm/ContactForm';
import { useRef } from "react";
import CircleProgress from "@/components/Common/CircleProgress/CircleProgress";
import { ReactSVG } from "react-svg";
import starIcon from "@/assets/svg/star.svg"

export default function SubProduct() {

    const contactRef = useRef(null);

    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });

    }

    return (<div className={cx("container")}>
        <div className={cx("row", s.main)}>

            <div className={cx("col col-12 col-md-6")}>
                <div className={cx(s.imageContainer, "mt-2")}>
                    <Image src={"/images/250-lph-ro-plant.jpg"} fill />
                </div>
            </div>

            <div className={cx("col col-12 col-md-6")}>

                <div className={cx(s.detailsPart)}>
                    <h1 className={s.productName}>250 LPH Inustrial RO Water Plant</h1>
                    <span className={cx(s.underLine, "mt-3")}></span>
                    <h2 className={cx(s.price, "pt-4")}>
                        ₹ 1,00,000 (+Taxes)
                    </h2>
                    <p className={cx("pt-3", s.text)}>250 LPH Industrial Reverse Osmosis (RO) System: Clean, Pure Water for Industry</p>
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
                    <Button className={cx(s.btn, "mt-4")} onClick={scrollToContact}>Need a new quote?</Button>

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
                        <div className={cx(s.reviewCircleContainer, "pt-3")}>
                            <div className={s.circle}><CircleProgress /></div>
                            <div className={s.textBlue}>4.9 out of 29 reviews</div>
                        </div>
                        <div className={s.reviewSection}>
                            <div className={s.reviewItem}>
                                <div className={s.reviewStarSection}>
                                    <div className={s.reviewStarList}><ReactSVG src={starIcon.src} /><ReactSVG src={starIcon.src} /><ReactSVG src={starIcon.src} /><ReactSVG src={starIcon.src} /><ReactSVG src={starIcon.src} /></div>
                                    <div>5</div>
                                </div>
                                <div className={cx(s.text, "pt-2")}>
                                    The best RO machine we had from this company. The quality is too good and they have no cost first service as well.
                                </div>
                                <div className={cx(s.text, "pt-2 opacity-75")}>
                                    Authenticated buyer | September 2023
                                </div>

                            </div>
                            <div className={s.reviewItem}>
                                <div className={s.reviewStarSection}>
                                    <div className={s.reviewStarList}><ReactSVG src={starIcon.src} /><ReactSVG src={starIcon.src} /><ReactSVG src={starIcon.src} /><ReactSVG src={starIcon.src} /><ReactSVG src={starIcon.src} /></div>
                                    <div>5</div>
                                </div>
                                <div className={cx(s.text, "pt-2")}>
                                    Best customer service on before and after.. suberb quality best price.. In this place easily identify in city..
                                </div>
                                <div className={cx(s.text, "pt-2 opacity-75")}>
                                    Authenticated buyer | September 2020
                                </div>

                            </div>
                            <div className={s.reviewItem}>
                                <div className={s.reviewStarSection}>
                                    <div className={s.reviewStarList}><ReactSVG src={starIcon.src} /><ReactSVG src={starIcon.src} /><ReactSVG src={starIcon.src} /><ReactSVG src={starIcon.src} /><ReactSVG src={starIcon.src} /></div>
                                    <div>5</div>
                                </div>
                                <div className={cx(s.text, "pt-2")}>
                                    Good service and quick response for the customer queries
                                </div>
                                <div className={cx(s.text, "pt-2 opacity-75")}>
                                    Authenticated buyer | January 2020
                                </div>

                            </div>
                        </div>
                        <div className={cx("mt-3")}>
                            <a className={cx(s.textLink)} href="https://maps.app.goo.gl/DUxq1JhNrR9vPNuh8" target="_blank">See all 29 reviews</a>
                        </div>

                        <a href="https://g.page/r/CSSWGd_hBAD4EBE/review" target="_blank">
                            <Button className={cx(s.btn, "mt-5")} onClick={scrollToContact}>Write a review</Button>
                        </a>

                    </div>
                </div>
            </div>

            <section >
                <div className='container '>
                    <h2 className='mt-5'>Related Industrial RO Plant</h2>
                    <div className={cx(' ', s.categoryParent)}>
                        <div className={s.categoryItem}>
                            <div className={s.categoryImageContainer}>
                                <Image src="/images/250lph.webp" fill alt="image" />
                            </div>
                            <h5>50 LPH RO Plant</h5>
                        </div>
                        <div className={s.categoryItem}>
                            <div className={s.categoryImageContainer}>
                                <Image src="/images/250lph.webp" fill alt="image" />
                            </div>
                            <h5>100 LPH RO Plant</h5>
                        </div>
                        <div className={s.categoryItem}>
                            <div className={s.categoryImageContainer}>
                                <Image src="/images/250lph.webp" fill alt="image" />
                            </div>
                            <h5>250 LPH RO Plant</h5>
                        </div>
                        <div className={s.categoryItem}>
                            <div className={s.categoryImageContainer}>
                                <Image src="/images/250lph.webp" fill alt="image" />
                            </div>
                            <h5>500 LPH RO Plant</h5>
                        </div>
                        <div className={s.categoryItem}>
                            <div className={s.categoryImageContainer}>
                                <Image src="/images/250lph.webp" fill alt="image" />
                            </div>
                            <h5>1000 LPH RO Plant</h5>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={contactRef}>
                <div className='container mt-3'>
                    <div className='row'>
                        <center><h2 style={{ maxWidth: 650 }} className='my-5'>Let us help you set up RO plant for your industry</h2></center>
                    </div>
                    <div className='row'>
                        <div className='col col-12 col-sm-12 col-md-6 d-flex justify-content-center'>
                            <div className='w-75'>
                                <ContactForm />
                            </div>
                        </div>
                        <div className='col col-12 col-sm-12 col-md-6'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4488.66195378772!2d78.12269396484325!3d9.904052762076079!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c57070024b29%3A0x41d17081b7644185!2sVinayaga%20Engineering!5e0!3m2!1sen!2sin!4v1694626688115!5m2!1sen!2sin"
                                style={{ border: 0, width: "100%", height: "50%" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>

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
                                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
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
            </section>

        </div>
    </div >
    )
}
