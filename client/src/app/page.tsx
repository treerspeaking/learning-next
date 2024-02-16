// "use client"

// import { revalidate } from "./api/hello/route";

// import { get } from "http";
// import Image from "next/image";
import { Button } from "./Button";
// import { revalidate } from "./api/hello/route";
// // export const revalidate = 1

// export default async function Page() {
//   const data_call = async () => {
//     return await fetch("http://localhost:3000/api/hello", {next: {revalidate: 1}})
//   }

//   const upData = async () => {
//     'use server'
//     let data = await (await data_call()).text()
//     // revalidate
//     return null
//   }

//   async function createInvoice(formData: FormData) {
//     'use server'
 
//     const rawFormData = {
//       customerId: formData.get('customerId'),
//       amount: formData.get('amount'),
//       status: formData.get('status'),
//     }
 
//     // mutate data
//     // revalidate cache
//   }

//   let randshit = async () => {
//     "use server"
//   }
//   let data: string = "fasdfas";

//   return (  
//     <>
//     {/* <button type="button">click me</button> */}
//     <button formAction={createInvoice}>123456</button>
//     {
//       data
//     }
//     </>
//   )
// }
export default async function Page() {
  let data_call = await fetch("http://localhost:3000/api/hello", {next: {revalidate: 0}});
  let data = await data_call.text();

 
  return (
  <form >      
    <input type="text" name="name" aria-label="123"/>
    <Button type="submit">Update User Name</Button>
    <p>{data}</p>
  </form>
  )
}