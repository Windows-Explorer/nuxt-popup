export interface IPopupOptions {
    title?: string
    message?: string
    actions?: IPopupActionsProps
}

export interface IPopupActionsProps {
    ok?: {
        label?: string,
        use?: boolean,
        action?: Promise<void> | void
    },
    cancel?: {
        label?: string,
        use?: boolean
    }
}