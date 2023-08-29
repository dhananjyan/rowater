import CategoryForm from "@/components/Admin/Category/CategoryForm";
import AdminLayout from "@/components/AdminLayout";
import CategoryService from "@/service/Category.service";
import Link from "next/link";
import { useRouter } from "next/router";

export const getServerSideProps = async (ctx) => {
    const categoryId = ctx.query["id"];
    const { results, status } = await CategoryService.findById(categoryId);
    if (!status) {
        return { props: { defaultValues: {} } }
    }
    return {
        props: {
            defaultValues: JSON.stringify(results)
        }
    }
}


export default function Edit({ defaultValues }) {
    const data = JSON.parse(defaultValues)
    return (
        <AdminLayout>
            <div className=" d-flex py-5 justify-content-between">
                <h2>Edit Category</h2>
                <Link href="/be-admin/category" className="btn - btn-outline-dark" >All Category</Link>
            </div>
            <CategoryForm defaultValues={data} showCms/>
        </AdminLayout>
    )
}   
