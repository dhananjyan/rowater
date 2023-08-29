
import { Button, Tab, Tabs } from "react-bootstrap";
import { useForm } from "react-hook-form";

import cx from "classname"

import s from "./AddCategory.module.scss";

import dynamic from 'next/dynamic'
import { createCategory, getCategoryList, updateCategory } from "@/helpers/category";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import Cms from "../../Cms/Cms";
const Cms = dynamic(() => import('../../Cms/Cms'), { ssr: false })

const Inputs = dynamic(() => import('@/components/Inputs/Inputs'), { ssr: false })
const Quill = dynamic(() => import('@/components/Inputs/Quill/Quill'), { ssr: false })

export default function CateogoryForm(props) {
    const { defaultValues = {}, showCms = false } = props;

    const { register, handleSubmit, formState: { errors }, reset, getValues, setValue } = useForm({
        defaultValues
    });
    const content = getValues("content")
    const [category, setCategory] = useState([]);
    const router = useRouter();

    const submitHandler = async data => {
        let parentId = String(data?.parentId).trim() ? data?.parentId : null,
            level = parentId ? 2 : 1,
            result, body = {
                ...data,
                parentId,
                level
            };
        if (data?._id)
            result = await updateCategory(body);
        else
            result = await createCategory(body);
        if (result)
            router.push("/be-admin/category");
    }

    const getCategory = async () => {
        const result = await getCategoryList();
        if (result?.length) {
            let normalizedCategory = result?.map(item => ({
                label: item?.name,
                value: item?._id,
                level: item?.level
            })).filter(item => item?.value != defaultValues?._id)
            setCategory(normalizedCategory)
        }
    }
    useEffect(() => {
        getCategory()
    }, [])

    return (<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Details">
            <form className={s.addCategoryForm} onSubmit={handleSubmit(submitHandler)}>
                <div className={s.inputParent}>
                    <div className={s.inputContainer}>
                        <Inputs
                            name="name"
                            register={register}
                            placeholder="Name"
                            label="Name"
                            validation={{
                                required: "*Required",
                                minLength: {
                                    value: 3,
                                    message: "Minimum length is 3"
                                }
                            }}
                        />
                        {errors.name && <span role="alert" className={s.errorMessage}>{errors.name.message}</span>}
                    </div>
                    <div className={s.inputContainer}>
                        <Inputs
                            name="slug"
                            register={register}
                            placeholder="ro-water-purifier"
                            label="Slug"
                            validation={{
                                required: "*Required",
                                minLength: {
                                    value: 3,
                                    message: "Minimum length is 3"
                                }
                            }}
                        />
                        {errors.slug && <span role="alert" className={s.errorMessage}>{errors.slug.message}</span>}
                    </div>
                    <div className={s.inputContainer}>
                        <Inputs
                            name="meta.title"
                            register={register}
                            placeholder="Meta Title"
                            label="Meta Title"
                            validation={{
                                required: "*Required",
                                minLength: {
                                    value: 3,
                                    message: "Minimum length is 3"
                                }
                            }}
                        />
                        {errors.meta?.title && <span role="alert" className={s.errorMessage}>{errors.meta.title.message}</span>}
                    </div>

                    <div className={s.inputContainer}>
                        <Inputs
                            name="parentId"
                            type="select"
                            options={category}
                            register={register}
                            placeholder="Parent Category"
                            label="Parent Category"
                            validation={{
                                // required: "*Required",
                            }}
                        />
                        {errors.parentId && <span role="alert" className={s.errorMessage}>{errors.parentId.message}</span>}
                    </div>
                    <div className={s.inputContainer}>
                        <Inputs
                            name="meta.description"
                            type="textarea"
                            register={register}
                            placeholder="Meta Description"
                            label="Meta Description"
                            validation={{
                                required: "*Required",
                                minLength: {
                                    value: 3,
                                    message: "Minimum length is 3"
                                }
                            }}
                        />
                        {errors.meta?.description && <span role="alert" className={s.errorMessage}>{errors.meta.description.message}</span>}
                    </div>
                </div>
                <div className={cx(s.inputContainer, "mt-3")}>
                    <Quill
                        name="content"
                        register={register}
                        label="Page content"
                        value={content}
                        setValue={setValue}
                    // validation={{
                    //     required: "*Required",
                    //     minLength: {
                    //         value: 3,
                    //         message: "Minimum length is 3"
                    //     }
                    // }}
                    />
                    {errors.content && <span role="alert" className={s.errorMessage}>{errors.content.message}</span>}
                </div>
                <Button className={s.submitBtn} type="submit">Create</Button>
            </form>
        </Tab>
        {showCms && <Tab eventKey={2} title="CMS">
            <Cms />
        </Tab>}
    </Tabs>
    )
}
