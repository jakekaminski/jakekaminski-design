/* eslint typescript-sort-keys/interface: error */
import type { ReadingTime } from 'nextra'
import { HTMLProps } from 'react'

export type BlogMetadata = {
    author?: string
    date?: string
    description?: string
    readingTime?: ReadingTime
    tags?: []
    title?: string
}

export type ClassName = { className?: HTMLProps<HTMLElement>['className'] }
