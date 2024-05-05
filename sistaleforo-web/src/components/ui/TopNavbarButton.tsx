import React from "react"
import { Button } from "./Button"

interface TopbarButtonProps {
  title: string
  active?: boolean
  onClick: () => void
}

const TopbarButton = ({
  title,
  active,
  onClick,
}: TopbarButtonProps) => {
  return (
    <Button
      onClick={onClick}
      size="sm"
      variant="ghost"
      className={`hover:bg-slate-200 ${
        active
          ? "bg-black border text-white hover:bg-depa-gray-700 hover:text-depa-gray-0"
          : ""
      }border border-black`}>
      {title}
    </Button>
  )
}

export default TopbarButton