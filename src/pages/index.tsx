import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


export default function Home() {
  const router = useRouter()
  useEffect(()=>{
    router.push('/component-1')
  },[])
  return (
   
    <main className="flex  h-[85vh] flex-col items-center justify-between p-24">
      hello
    </main>
  )
}
