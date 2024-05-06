import React from 'react'
import { Button } from './Button'

interface TopbarButtonProps {
  title: string
  active?: boolean
  onClick: () => void
}

const TopbarButton = ({ title, active, onClick }: TopbarButtonProps) => {
  return (
    <Button
      onClick={onClick}
      size="sm"
      variant="ghost"
      className={`bg-[#9CD6C8] border-b border-r border-black hover:bg-[#c3f7ec]
      ${
        active ? 'bg-[#c3f7ec] hover:bg-[#9CD6C8]' : ''
      }`}
    >
      {title}
    </Button>
  )
}

export default TopbarButton
