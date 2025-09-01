"use client"

import { useActionState, startTransition } from "react"
import { createPostWithState } from "../action"
import { LoadingIndicators } from "./loading"

export function Button() {
  // createPostWithState: (prevState, formData) => Promise<boolean>
  const [state, dispatch, pending] = useActionState(createPostWithState, null)

  return (
    <button
      onClick={() =>
        startTransition(() => {
          // Compose FormData payload here (since this button isn't inside a <form>)
          const fd = new FormData()
          fd.set("title", "From Button")
          fd.set("content", "Triggered via useActionState")
          dispatch(fd) // payload becomes the 2nd argument to createPostWithState
        })
      }
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 min-w-[140px]"
      disabled={pending}
      aria-busy={pending}
    >
      {pending ? <LoadingIndicators /> : "Create Post"}
    </button>
  )
}
