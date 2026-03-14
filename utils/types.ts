import { HTMLProps } from 'react'

export type BlogMetadata = {
    author?: string
    date?: string
    description?: string
    tags?: string[]
    title?: string
}

export type ClassName = { className?: HTMLProps<HTMLElement>['className'] }
