// "use client"

// import { revalidate } from "./api/hello/route";

// import { get } from "http";
// import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Button  from "./ClientButton";

// import { revalidate } from "./api/hello/route";
// import { revalidate } from './api/hello/route';
// export const revalidate = 1

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
  // let data_call = await fetch("http://localhost:3000/api/hello", {next: {revalidate: 0}});
  let data_call = await fetch("http://server:8000/home", {next: {revalidate: 0}})
  let data = await data_call.json().catch(err => {console.log(err); return {data: {hello: "this is error"}}});

 
  return (
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
    <Button>Click me To generate a new number</Button>
    <Typography sx={{p:1}}>{data.hello}</Typography>
    {/* <Typography>{data}</Typography> */}
  </Box>
  )
}