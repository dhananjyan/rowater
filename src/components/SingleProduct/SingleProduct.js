import Image from 'next/image'
import s from "./SingleProduct.module.scss";
import ContentImage from './ContentImage/ContentImage';
import cx from "classname";
import CommonButton from '../Common/Button/Button';
import { Accordion } from 'react-bootstrap';
import { lazy, useRef } from 'react';
// import ContactForm from '@/components/ContactForm/ContactForm';
const ContactForm = lazy(() => import('@/components/ContactForm/ContactForm'));

export default function SingleProduct({ result }) {

  const { description, heading, imgSrc, section = [] } = result || {};
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });

  }
  return (
    <div className={s.main}>
      <section >
        <ContentImage
          titleOne={heading}
          description={description}
          image={imgSrc}
          onClick={scrollToContact}
        />
      </section>

      {section?.map(item => {
        const { type, title, content, img, data } = item || {};

        switch (type) {
          case "contentImage":
            return (
              <section >
                <ContentImage
                  titleTwo={title}
                  description={content}
                  image={img}
                  isLeft
                  onClick={scrollToContact}
                />
              </section>)
            break;

          case "points":
            return (
              <section>
                <div className='container'>
                  <div className='d-flex flex-wrap gap-2 justify-content-around align-items-center '>
                    {data?.map(item => {
                      const { title, img } = item || {}
                      return (<div className={s.featureItem}>
                        <div className={s.featureImageContainer}>
                          {/* <Image src={img} fill alt="image" /> */}
                          <div dangerouslySetInnerHTML={{ __html: img }} />
                        </div>
                        <h5>{title}</h5>
                      </div>)
                    })}
                  </div>
                </div>
              </section>)
            break;
          case "category":
            return (

              <section>
                <div className='container'>
                  <center><h2 className='my-5'>{title}</h2></center>
                  <div className={cx(' ', s.categoryParent)}>
                    {data?.map(item => {
                      const { title, img } = item || {};
                      return (<div className={s.categoryItem}>
                        <div className={s.categoryImageContainer}>
                          <Image src={img} fill alt="image" />
                        </div>
                        <h5>{title}</h5>
                      </div>);
                    })}
                  </div>
                </div>
              </section>
            );
            break;
          case "banner":
            return (
              <section>
                <div className='container'>
                  <div className='d-flex justify-content-center align-items-center'>
                    <div className={s.contactUs}>
                      <div>{content}</div>
                      <div>
                        <CommonButton onClick={scrollToContact} style={{ padding: "8px 30px" }} variant="white" >Contact us</CommonButton>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
            break;
          case "feature":
            return (
              <section className={s.featureSection}>
                <div className='container'>
                  <center><h2 className='my-5' style={{ maxWidth: 600 }}>{title}</h2></center>
                  <div className={s.categoryParent}>

                    {data?.map(item => {
                      const { title, content } = item || {};
                      return (<div className={s.featureItem}>
                        <h4>{title}</h4>
                        <p>{content}</p>
                      </div>);
                    })}
                  </div>
                </div>
              </section>);
            break;
          case "review":
            return (
              <section>
                <div className='container'>
                  <center><h2 className='my-5'>{title}</h2></center>
                  <div className='d-flex flex-wrap gap-2 justify-content-around align-items-baseline '>

                    {data?.map(item => {
                      const { title, content, img } = item || {};
                      return (<div className={s.featureItem}>
                        <div className={s.featureImageContainer}>
                          <Image src={img} fill alt="image" />
                        </div>
                        <div><b>{title}</b></div>
                        <p>{content}</p>
                      </div>);
                    })}
                  </div>
                </div>
              </section>);
            break;
          case "faq":
            return (
              <section>
                <div className='container'>
                  <center><h2 style={{ maxWidth: 650 }} className='my-5'>{title}</h2></center>
                  <div>
                    {data?.map((item, i) => {
                      const { title, content, list } = item || {};
                      return (
                        <Accordion className='py-2' key={`FAQ_${i}`}>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header className={s.accordianHeader}>{`${i + 1}. ${title}`}</Accordion.Header>
                            <Accordion.Body className={s.accordianBody}>
                              {content ? content : ""}
                              {list?.length ? <ul>
                                {list.map((item, i) => <li key={`FAQ_LIST_${i}`}>{item}</li>)}
                              </ul> : ""}
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>);
                    })}
                  </div>
                </div>
              </section>);

          default:
            break;
        }
      })}
      <section ref={contactRef}>
        <div className='container'>
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
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>

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
      </section>
    </div>
  )
}
