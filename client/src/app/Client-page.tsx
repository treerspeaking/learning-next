"use client"

import { Box, Button, Typography } from "@mui/material";
import { headers } from "next/headers";
import { useEffect, useState } from "react"

export function RandomClient() {
  const [randNum, setrandNum] = useState({hello : 0});
  const [isLoading, setIsLoading] = useState(false);

  const handleCLick = async () => {
    setIsLoading(true);
    try{
      const response = await fetch("/server/home", {next: {revalidate: 0}})
      if(!response.ok){
        throw new Error(`error! status: ${response.status}`)
      }

      const result = await response.json();
      setrandNum(result);
    }  catch (err){
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
  <>
    <Button onClick={handleCLick}>Click me To generate a client side number</Button>
    <Typography sx={{p:1}}>{randNum.hello}</Typography>
    {/* <Typography>{data}</Typography> */}
  </>
  )
}