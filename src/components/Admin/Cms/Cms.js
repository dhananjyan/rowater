import Inputs from "@/components/Inputs/Inputs";
import { Accordion, Button, Card } from "react-bootstrap";
import { useFieldArray, useForm } from "react-hook-form";
import s from "./Cms.module.scss";
import cx from "classname";
import dynamic from 'next/dynamic'

import DropZone from "../../Inputs/Dropzone/Dropzone"
import List from "./List/List";
// import Quill from "@/components/Inputs/Quill/Quill";
const Quill = dynamic(() => import('@/components/Inputs/Quill/Quill'), { ssr: false });

export default function Cms() {
    const { control, register, getValues, setValue, handleSubmit, watch } = useForm({
        defaultValues: {
            cms: [{
                title: "Check",
                content: "",
                isEnabled: true,
                list: [{
                    title: "title",
                    description: "Description",
                    image: "image"
                }],
                image: "String",
                type: "content", //faq, image, card
            }]
        }
    });

    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "cms", // unique name for your Field Array
    });

    const handleAddNewClick = () => {
        append({ type: "content", list: [{}] })
    }

    console.log('va;;d;dd', getValues())
    const values = watch();

    return (
        <form onSubmit={handleSubmit(console.log)}>
            <div className="py-3">
                <Accordion >
                    {fields.map((field, index) => (
                        <Accordion.Item eventKey={index} key={field.id}>
                            <Accordion.Header>
                                <div>
                                    <span className="text-capitalize">{values.cms?.[index]?.type}</span> - {values.cms?.[index]?.title}
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div  >
                                    <Inputs
                                        type="select"
                                        label="Type"
                                        name={`cms.${index}.type`}
                                        register={register}
                                        isOptional={false}
                                        options={[
                                            { label: "Content", value: "content" },
                                            { label: "FAQ", value: "faq" },
                                            { label: "Image", value: "image" },
                                            { label: "Card", value: "card" },
                                        ]}
                                    />
                                    <Inputs
                                        label="Title"
                                        name={`cms.${index}.title`}
                                        register={register}
                                        inputGroupClassname={cx("py-2")}
                                    />
                                    {["content", "card"].includes(values.cms?.[index]?.type) && <Quill
                                        label="Content"
                                        name={`cms.${index}.content`}
                                        register={register}
                                        setValue={setValue}
                                        inputGroupClassname={cx("py-2")}
                                    />}
                                    {["image"].includes(values.cms?.[index]?.type) && <DropZone
                                        register={register}
                                        name={`cms.${index}.image`}
                                        setValue={setValue}
                                        label="Image"
                                        inputGroupClassname={cx("py-2")}
                                    />}
                                    {/* FAQ */}
                                    {["faq"].includes(values.cms?.[index]?.type) && <List
                                        control={control}
                                        register={register}
                                        label="FAQ"
                                        inputGroupClassname={cx("py-2")}
                                        name={`cms.${index}.list`}
                                        setValue={setValue}
                                        titleLable="Question"
                                        descriptionLabel="Answer"
                                        showImage
                                    />}
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>

                    ))}
                </Accordion>
            </div>
            <div className="d-flex justify-content-center">
                <Button onClick={handleAddNewClick}>Add new</Button>
                <Button type="submit">Submit</Button>
            </div>
        </form>
    );
}