import { Footer, Navbar } from '@/components'
import '../../app/globals.css'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (<>
        <Navbar/>
        <main>
        {children}
        </main>
        <Footer/>
  </>
  )
}
