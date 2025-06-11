"use client"
import { Provider } from "react-redux"
import { store } from "."

type providersProps = {
    children: React.ReactNode
}

export const Providers = ({ children }: providersProps) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
} 