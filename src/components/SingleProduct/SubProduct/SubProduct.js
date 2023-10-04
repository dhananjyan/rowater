import cx from "classname";
import Image from "next/image";
import s from "./SubProduct.module.scss";

export default function SubProduct() {
    return (<div className={cx("container")}>
        <div className={cx("row")}>

            <div className={cx("col col-12 col-md-5")}>
                <div className={s.imageContainer}>
                    <Image src={"/Logo.png"} fill />
                </div>
            </div>

            <div className={cx("col col-12 col-md-7")}>

                <div className={cx(s.detailsPart, "w-75")}>
                    <h1 className={s.productName}>250 LPH Inustrial RO Water Plant</h1>
                    <span className={cx(s.underLine, "mt-3")}></span>
                    <h2 className={cx(s.price)}>
                        ₹ 1,00,000 (+Taxes)
                    </h2>
                    <div
                        className={cx(s.deatailsSection)}
                    >
                        <div className={s.detailsItem}>
                            <div className={s.label}>Availability:</div>
                            <div className={s.value}>In Stock</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
