"use client"
import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';
export default function ClientButton(props: any) {
  const router = useRouter();
  // console.log(children)
  return (
    <>
    <Button type="button" variant='contained' onClick={async () =>{router.refresh()}}>{props.children}</Button>
    </>
  )
}