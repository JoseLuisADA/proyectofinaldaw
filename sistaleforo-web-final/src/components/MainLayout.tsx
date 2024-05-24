// layouts/MainLayout.tsx
import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import { UserProvider } from '../context/UserContext'

type MainLayoutProps = {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => (
  <div className="flex flex-col min-h-screen">
    <UserProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </UserProvider>
  </div>
)

export default MainLayout
