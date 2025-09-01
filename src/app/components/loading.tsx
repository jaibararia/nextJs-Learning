'use client'
import { useLinkStatus } from 'next/link'

// Simple loading spinner for buttons (doesn't use useLinkStatus)
export function LoadingIndicators() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
      <span className="text-sm">Loading...</span>
    </div>
  )
}

// Original component for Link navigation
export default function LoadingIndicator() {
  const { pending } = useLinkStatus()
  
  return pending ? (
    <div className="fixed top-0 left-0 w-full h-1 bg-blue-600 animate-pulse z-50" />
  ) : null
}