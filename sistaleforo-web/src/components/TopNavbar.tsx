'use client'
import React from 'react'
import TopbarButton from './ui/TopNavbarButton'
import { usePathname, useRouter } from 'next/navigation'
import { TOPBAR_BUTTONS } from './constants'

const TopNavbar = () => {
  const path = usePathname()
  const router = useRouter()

  const handleButtonClick = (buttonTitle: string) => {
    router.push(`/${buttonTitle}`)
  }

  return (
      <div className="inline-flex w-full">
        {TOPBAR_BUTTONS.SYSTEM.map((button) => (
          <TopbarButton
            key={button.title}
            title={button.title}
            onClick={() => handleButtonClick(button.path)}
            active={path?.includes(`/${button.path}` ) || (path === '/' && button.path === '/')}
          />
        ))}
      </div>
  )
}

export default TopNavbar
