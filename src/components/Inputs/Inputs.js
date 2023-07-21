"use client";
import { Form } from 'react-bootstrap';

import cx from "classname";

export default function Inputs(props) {
    const { label, mutedText, type = "text", placeholder, register, name, inputClassName="", inputGroupClassname="" } = props || {};
    const additionalAttributes = {};
    if (type == "textarea") {
        additionalAttributes.as = "textarea";
        additionalAttributes.rows = 4;
    }
    return (
        <Form.Group className={cx(inputGroupClassname)} controlId="formBasicEmail">
            {label ? <Form.Label>{label}</Form.Label> : ""}
            <Form.Control className={inputClassName} {...additionalAttributes} placeholder={placeholder}  {...register(name)} />
            {mutedText ? <Form.Text className="text-muted">{mutedText}</Form.Text> : ""}
        </Form.Group>
    )
}
