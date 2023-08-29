import { client } from "@/utils/client"

export const createCategory = async data => {
    const result = await client.post("/api/category", data);
    return result?.status;
}

export const updateCategory = async data => {
    const result = await client.patch("/api/category", data);
    console.log("dddddddddddddddd", result)
    return result?.status;
}

export const getCategoryList = async data => {
    const result = await client.get("/api/category", data);
    console.log('ffff', result)
    return result?.data || [];
}