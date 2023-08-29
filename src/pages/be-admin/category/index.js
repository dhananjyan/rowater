import Category from '@/components/Admin/Category'
import AdminLayout from '@/components/AdminLayout'
import { getCategoryList } from '@/helpers/category'
import { fetchCategories, setCategory } from '@/store/reducer/admin'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function categoryPage() {

  const dispatch = useDispatch();
  const category = useSelector(state => state?.admin?.category)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  return (
    <AdminLayout>
      <div className='d-flex justify-content-between py-5'>
        <h2>Category</h2>
        <Link className='btn btn-outline-dark' href="/be-admin/category/add">Add new</Link>
      </div>
      <Category data={category} />
    </AdminLayout>
  )
}
