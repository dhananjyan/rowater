"use client";
import { Form } from 'react-bootstrap'

export default function Inputs(props) {
    const { label, mutedText, type = "text", placeholder, register, name } = props || {};
    const additionalAttributes = {};
    if (type == "textarea") {
        additionalAttributes.as = "textarea";
        additionalAttributes.rows = 4;
    }
    return (
        <Form.Group className="mb-3" controlId="formBasicEmail">
            {label ? <Form.Label>{label}</Form.Label> : ""}
            <Form.Control {...additionalAttributes} placeholder={placeholder}  {...register(name)} />
            {mutedText ? <Form.Text className="text-muted">{mutedText}</Form.Text> : ""}
        </Form.Group>
    )
}
