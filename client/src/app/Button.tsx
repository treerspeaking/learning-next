"use client"

export function Button({func}: {func: () => Promise<null|number|void>}) {
  const data = async () => {
    return await fetch("http://localhost:3000/api/hello", {next: {revalidate: 1}})
  }

  return (
    <>
    <button type="button" onClick={async () =>{await func()}}>click me</button>
    </>
  )
}