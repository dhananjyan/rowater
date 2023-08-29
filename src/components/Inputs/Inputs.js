"use client";
import { Form } from 'react-bootstrap';

import cx from "classname";

export default function Inputs(props) {
    const { label, mutedText, validation = {}, isOptional = true, type = "text", placeholder, register, name, inputClassName = "", inputGroupClassname = "", options = [] } = props || {};
    const additionalAttributes = {};
    if (type == "textarea") {
        additionalAttributes.as = "textarea";
        additionalAttributes.rows = 4;
    }
    return (
        <Form.Group className={cx(inputGroupClassname)} controlId="formBasicEmail">
            {label ? <Form.Label>{label}</Form.Label> : ""}
            {type === "select" ? <Form.Select name={name} className={inputClassName} {...additionalAttributes} placeholder={placeholder}  {...register(name, validation)}>
                {isOptional ? <option value="">Select {label}</option> : ""}
                {options?.map(item => {
                    let length = ((item?.level || 1) - 1) * 4
                    let beforeList = Array.from({ length }, () => "&nbsp;")
                    return <option value={item?.value}>
                        <span dangerouslySetInnerHTML={{ __html: `${beforeList?.join("")}` }} />{item?.label}
                    </option>
                })}
            </Form.Select> : <Form.Control name={name} className={inputClassName} {...additionalAttributes} placeholder={placeholder}  {...register(name, validation)} />}
            {mutedText ? <Form.Text className="text-muted">{mutedText}</Form.Text> : ""}
        </Form.Group>
    )
}
