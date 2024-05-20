import "boxicons/css/boxicons.min.css" // npm install boxicons --save
import React, { ErrorInfo } from "react"
import { Input } from "../ui/input"

interface CustomInputProps {
  id?: string
  icon?: string
  iconSize?: string
  iconColor?: string
  type: string
  className?: string
  placeholder?: string
}

interface CustomInputState {
  hasError: boolean
}

class CustomInput extends React.Component<CustomInputProps, CustomInputState> {
  constructor(props: CustomInputProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Error captured in CustomInput:", error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-red-500">
          Something went wrong while rendering the input.
        </div>
      )
    }

    const {
      id = "",
      icon,
      iconSize = "",
      iconColor = "",
      type,
      className = "",
      placeholder = "",
    } = this.props

    return (
      <div className={`inline-flex ${className}`}>
        {icon ? (
          <i
            className={`bx ${iconSize} ${icon} ${iconColor} inline-flex pl-4 relative top-[0.4rem] right-1`}
          ></i>
        ) : (
          <div className="pl-4"></div>
        )}
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={() => {}}
          className={`${className} bg-inherit w-full h-full border-none focus-visible:ring-0`}
          style={{  boxShadow: 'none', outline: 'none' }}
        />
      </div>
    )
  }
}

export default CustomInput