import { PopupStyles } from "./popup-styles.enum"

export interface IPopupOptions {
    id?: number | string
    index?: number
    // visibile: boolean
    title?: string
    message?: string
    actions?: IPopupActionsProps
    closeButton?: {
        use: boolean
        offset: boolean
    }
    popupStyle?: PopupStyles
}

interface IPopupActionsProps {
    ok?: {
        label?: string
        use: boolean
        action?: any
    },
    cancel?: {
        label?: string
        use: boolean
    }
}