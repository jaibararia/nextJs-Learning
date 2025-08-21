'use client'

import { useLinkStatus } from 'next/link'

export default function LoadingIndicators() {
    const { pending } = useLinkStatus()
    return pending ? (
        <div className="fixed top-0 left-0 w-full h-1 bg-blue-600 animate-pulse z-50" />
    ) : null
}