import { createContext, useState } from "react"

export const ToastContext = createContext(null)

const DEFAULT_OPTIONS = {
    autoDismiss: true,
    autoDismissTimeout: 5000,
    position: "top-right"
}

export default function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([])

    function addToast(text, { id = crypto.randomUUID(), ...userDefinedOptions } = {}) {
        const options = { ...DEFAULT_OPTIONS, ...userDefinedOptions }
        setToasts(currentToasts => {
            return [...currentToasts, { text, options, id }]
        })
    }

    function removeToast(id) {
        setToasts(currentToasts => {
            return currentToasts.filter(toast => toast.id !== id)
        })
    }

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>{children}</ToastContext.Provider>
    )
}