"use client";
import { Button, Form } from 'react-bootstrap';
import s from './style.module.scss'
import Inputs from '../Inputs/Inputs';

import { useForm } from "react-hook-form";


export default function ContactForm() {
    const { register, handleSubmit } = useForm();

    return (
        <div className={s.formContainer}>
            <h3>Request a call back</h3>
            <Form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <Inputs name="name" register={register} label="Name" />
                <Inputs register={register} name="email" label="Email" />
                <Inputs register={register} name="phoneNumber" label="Mobile Number" />
                <Inputs register={register} type="textarea" name="message" label="Message" />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
} 
