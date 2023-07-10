"use client";
import { Button, Form } from 'react-bootstrap';
import s from './style.module.scss'
import Inputs from '../Inputs/Inputs';

export default function ContactForm() {
    return (
        <div className={s.formContainer}>
            <Form>
                <Inputs />
                <Inputs />
                <Inputs />
                <Inputs />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
} 
