import { NextRequest } from "next/server";
import { text } from "stream/consumers";
export const revalidate = 1
export async function GET(request: NextRequest){
  // const res = await fetch("http://localhost:8000/home")
  const res = await fetch("http://server:8000/home")
  // const data = await res.json();
  const data = await res.json()
  return Response.json({data})
}