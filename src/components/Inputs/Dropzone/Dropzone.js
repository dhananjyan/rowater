import React from 'react';
import { useDropzone } from 'react-dropzone';
import s from "./Dropzone.module.scss"
import cx from "classname";
import { Form } from 'react-bootstrap';

export default function Dropzone(props) {
    const { label, inputGroupClassname, setValue, name } = props;

    const onDropAccepted = files => {
        var file = files[0]
        const reader = new FileReader();
        reader.onload = (event) => {
            console.log(event.target.result);
            setValue(name, event.target.result)
        };
        reader.readAsDataURL(file);

    }

    const {
        // acceptedFiles,
        // fileRejections,
        getRootProps,
        getInputProps
    } = useDropzone({
        accept: {
            'image/jpeg': [],
            'image/png': []
        },
        maxFiles: 1,
        multiple: false,
        onDropAccepted
    });


    // const acceptedFileItems = acceptedFiles.map(file => (
    //     <li key={file.path}>
    //         {file.path} - {file.size} bytes
    //     </li>
    // ));

    // const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    //     <li key={file.path}>
    //         {file.path} - {file.size} bytes
    //         <ul>
    //             {errors.map(e => (
    //                 <li key={e.code}>{e.message}</li>
    //             ))}
    //         </ul>
    //     </li>
    // ));

    return (
        <section className={cx(inputGroupClassname)}>
            {label ? <Form.Label>{label}</Form.Label> : ""}
            <div {...getRootProps({ className: cx('dropzone', s.dropzone) })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
                <em>(Only *.jpeg and *.png images will be accepted)</em>
            </div>
            {/* <aside>
                <h4>Accepted files</h4>
                <ul>{acceptedFileItems}</ul>
                <h4>Rejected files</h4>
                <ul>{fileRejectionItems}</ul>
            </aside> */}
        </section>
    );
}
