"use client"
import { useRouter } from 'next/navigation';
export function Button() {
  const router = useRouter();

  return (
    <>
    <button type="button" onClick={async () =>{router.refresh()}}>click me</button>
    </>
  )
}