import Image from "next/image";
import s from "./ContentImage.module.scss";
import cx from "classname";
import Button from "@/components/Common/Button/Button";

export default function ContentImage(props) {
    const { titleOne, titleTwo, description, image, isLeft, onClick } = props;
    return (
        <div className='container'>
            <div className='row'>
                <div className={cx('col col-12 col-md-6 col-sm-12 ', { "order-md-2": isLeft })} >
                    <div className={cx("d-flex justify-content-center align-items-center h-100 ", s.content)}>
                        <div>
                            {titleOne ? <h1 className="pb-3">{titleOne}</h1> : ""}
                            {titleTwo ? <h2 className="pb-3">{titleTwo}</h2> : ""}
                            {/* <h1 className="pb-3">{title}</h1> */}
                            <p className="pb-3">{description}</p>
                            <Button onClick={onClick} className="pb-3">Get a quote</Button>
                        </div>
                    </div>
                </div>
                <div className={cx('col col-12 col-md-6 col-sm-12 order-md-1')}>
                    <div className={cx("d-flex justify-content-start align-items-center h-100  ps-5 ", s.imageContainer)}>
                        <Image src={image} fill className={s.image} />
                    </div>
                </div>
            </div>
        </div >
    )
}
