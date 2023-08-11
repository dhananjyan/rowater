"use client";
import { Button, Form, Modal } from 'react-bootstrap';
import s from './style.module.scss'
import cx from "classname";
import Inputs from '../Inputs/Inputs';
import Spinner from 'react-bootstrap/Spinner';


import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                {/* <Modal.Header closeButton> */}
                {/* <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title> */}
                {/* </Modal.Header> */}
                <div className={s.popup}>
                    <div className={s.logo}>
                        <img src="/logo.png" />
                        <div>Vinayaga<br />Engineering</div>
                    </div>
                    <h4 className='text-center'>Thanks for reaching us. We will contact you soon.</h4>

                    <Button variant='dark' onClick={props.onHide}>Close</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    async function onSubmit(data) {
        try {
            setIsLoading(true);
            const response = await axios.post('/api/send-mail', data);
            setIsLoading(false);
            if (response.status === 200) {
                setIsModalOpen(true);
                reset();
            }
        } catch (error) {
            console.error('Error sending email', error);
        }
    }
    return (
        <div className={s.formContainer}>
            <MyVerticallyCenteredModal show={isModalOpen} onHide={() => setIsModalOpen(false)} />
            <h3>Request a <span className={s.orangeColor}>call back</span></h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className={s.inputContainer}>
                    <Inputs
                        inputGroupClassname={s.input}
                        name="name"
                        register={register}
                        placeholder="Name"
                        validation={{
                            required: "*Required",
                            minLength: {
                                value: 3,
                                message: "Minimum length is 3"
                            }
                        }}
                    />
                    {errors.name && <span role="alert" className={s.errorMessage}>{errors.name.message}</span>}

                </div>
                <div className={s.inputContainer}>
                    <Inputs
                        inputGroupClassname={s.input}
                        register={register}
                        name="email"
                        placeholder="Email"
                        validation={{
                            pattern: {
                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                message: "Enter valid email"
                            }
                        }}
                    />
                    {errors.email && <span role="alert" className={s.errorMessage}>{errors.email.message}</span>}

                </div>
                <div className={s.inputContainer}>
                    <Inputs
                        inputGroupClassname={s.input}
                        register={register}
                        name="phoneNumber"
                        placeholder="Mobile Number"
                        validation={{
                            required: "*Required",
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Enter valid mobile number"
                            }
                        }}
                    />
                    {errors.phoneNumber && <span role="alert" className={s.errorMessage}>{errors.phoneNumber.message}</span>}

                </div>
                <div className={s.inputContainer}>
                    <Inputs
                        inputGroupClassname={s.input}
                        register={register} type="textarea"
                        name="message"
                        placeholder="Message"
                        validation={{
                            required: "*Required",
                        }}
                    />
                    {errors.message && <span role="alert" className={s.errorMessage}>{errors.message.message}</span>}
                </div>
                <Button disabled={isLoading} variant="outline-primary" className={cx(s.submitBtn, "gap-2 d-flex align-items-center")} type="submit">
                    {isLoading ? <Spinner animation="border" role="status" size="sm">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner> : ""}
                    Request
                </Button>
            </Form>
        </div>
    )
} 
