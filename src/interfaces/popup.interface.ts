import { VNode } from "vue"

export interface IPopupOptions {
    title?: string
    message?: string
    actions?: IPopupActionsProps
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