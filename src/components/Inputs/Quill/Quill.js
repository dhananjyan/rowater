import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    }
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
]


export default function Quill(props) {
    const { label, value, mutedText, validation = {}, type = "text", placeholder, register, name, inputClassName = "", inputGroupClassname = "", options = [], setValue } = props || {};
    console.log("valuevaluevaluevaluevaluevaluevaluevalue", value)
    return <div className={inputGroupClassname}>
        {label ? <Form.Label>{label}</Form.Label> : ""}        <ReactQuill
            theme="snow"
            value={value}
            defaultValue={value}
            // onChange={setValue}
            modules={modules}
            formats={formats}
            {...register(name, validation)}
            onChange={(d) => setValue(name, d)}
            className={inputClassName}
        />
    </div>;
}