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
                <Inputs inputGroupClassname={s.input} inputG name="name" register={register} placeholder="Name" />
                <Inputs inputGroupClassname={s.input} register={register} name="email" placeholder="Email" />
                <Inputs inputGroupClassname={s.input} register={register} name="phoneNumber" placeholder="Mobile Number" />
                <Inputs inputGroupClassname={s.input} register={register} type="textarea" name="message" placeholder="Message" />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
} 
