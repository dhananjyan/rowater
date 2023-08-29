import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useFieldArray } from 'react-hook-form';

import cx from "classname"
import Inputs from '@/components/Inputs/Inputs';

import Dropzone from '@/components/Inputs/Dropzone/Dropzone';

export default function List(props) {

    const { control, register, label, inputGroupClassname, name, titleLabel, descriptionLabel, setValue, showImage } = props;

    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name, // unique name for your Field Array
    });

    return (
        <div className={cx(inputGroupClassname)}>
            {label ? <Form.Label>{label}</Form.Label> : ""}
            <div>
                <Card >
                    <Card.Body>
                        {fields.map((field, index) => (
                            <div key={field.id}>
                                <div>{index + 1}</div>
                                <Inputs
                                    placeholder={titleLabel}
                                    name={`${name}.${index}.title`}
                                    register={register}
                                    inputGroupClassname={cx("py-2")}
                                />
                                <Inputs
                                    placeholder={descriptionLabel}
                                    name={`${name}.${index}.description`}
                                    register={register}
                                    type="textarea"
                                    inputGroupClassname={cx("py-2")}
                                />
                                {showImage && <Dropzone
                                    register={register}
                                    name={`${name}.${index}.image`}
                                    setValue={setValue}
                                    label="Image"
                                    inputGroupClassname={cx("py-2")}
                                />}
                            </div>
                        ))}
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Button onClick={() => append({})}>Add</Button>
            </div>
        </div>
    )
}
