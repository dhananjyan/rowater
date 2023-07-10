"use client";
import { Form } from 'react-bootstrap'

export default function Inputs(props) {
    const { label, mutedText, type = "text", placeholder } = props || {};
    return (
        <Form.Group className="mb-3" controlId="formBasicEmail">
            {label ? <Form.Label>{label}</Form.Label> : ""}
            <Form.Control type={type} placeholder={placeholder} />
            {mutedText ? <Form.Text className="text-muted">{mutedText}</Form.Text> : ""}
        </Form.Group>
    )
}
