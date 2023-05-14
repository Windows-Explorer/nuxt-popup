import { VNode } from "vue"

export interface IPopupOptions {
    index?: number
    title?: string
    message?: string
    actions?: IPopupActionsProps
    closeButton?: boolean
    // visible?: boolean
    // html?: IPopupHTMLOptions
}

export interface IPopupActionsProps {
    ok?: {
        label: string
        use: boolean
        action?: Promise<void> | void
    },
    cancel?: {
        label: string
        use: boolean
    }
}

// Not tested
// export interface IPopupHTMLOptions {
//     use: boolean
//     html?: VNode
// }