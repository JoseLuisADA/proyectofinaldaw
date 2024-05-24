'use client'
import React, { createContext, useContext, useState } from "react"
import { UserProps } from "../types/userProps"

export interface UserContextType {
  user: { username: string }
  setUser: React.Dispatch<React.SetStateAction<UserProps>>
  handleSetUserUsername: (username: string) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  
  const [user, setUser] = useState<UserProps>({
    username: "",
  })

  const handleSetUserUsername = (username: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      username,
    }))
  }

  return (
    <UserContext.Provider
      value={{ user, setUser, handleSetUserUsername}}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}