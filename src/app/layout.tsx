import type { Metadata } from 'next'
import Sidebar from '@/core/components/sidebar';
import Header from '@/core/components/header';

import '@/assets/scss/main.scss';
import '@/assets/css/icon.css';

export const metadata: Metadata = {
  title: 'React App',
  description: 'Web site created with Next.js.',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id='cryptoon-layout' className='theme-orange'>
            <Sidebar/>
            <div className='main px-lg-4 px-md-4'>
                <Header/>
                <div className="body d-flex py-3 ">
                    {children}
                </div>
            </div>
        </div>
      </body>
    </html>
  )
}