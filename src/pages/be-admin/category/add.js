import CategoryForm from "@/components/Admin/Category/CategoryForm";
import AdminLayout from "@/components/AdminLayout";
import Link from "next/link";

export default function Add() {
    return (
        <AdminLayout>
            <div className=" d-flex py-5 justify-content-between">
                <h2>Add Category</h2>
                <Link href="/be-admin/category" className="btn - btn-outline-dark" >All Category</Link>
            </div>
            <CategoryForm />
        </AdminLayout>
    )
}   
