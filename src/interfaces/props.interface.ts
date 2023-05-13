export interface IPopupProps {
    title?: string
    message?: string
    actions?: IPopupActionsProps
}

export interface IPopupActionsProps {
    ok?: {
        label?: string,
        action?: Promise<void> | void
    },
    cancel?: {
        label?: string,
        action?: Promise<void> | void
    }
}