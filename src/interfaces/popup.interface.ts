import { PopupStyles } from "./popup-styles.enum"

export interface IPopupOptions {
    index?: number
    title?: string
    message?: string
    actions?: IPopupActionsProps
    closeButton?: {
        use: boolean
        offset: boolean
    }
    popupStyle?: PopupStyles
}

export interface IPopupActionsProps {
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