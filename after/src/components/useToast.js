import { useContext } from "react";
import { ToastContext } from "./ToastProvider";

export default function useToast() {
    const value = useContext(ToastContext)

    if (value == null) {
        throw new Error("useToast has to be within ToastProvider.")
    }

    return value
}