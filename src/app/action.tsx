"use server"

// Optional: simple in-memory store to simulate persistence
let likeCount = 0

function parsePost(formData: FormData) {
  const title = formData.get("title")
  const content = formData.get("content")
  return {
    title: typeof title === "string" ? title : null,
    content: typeof content === "string" ? content : null,
  }
}

/**
 * Use this with <form action={submitPost}>
 * Must return void | Promise<void> for the form action prop to type-check.
 */
export async function submitPost(formData: FormData): Promise<void> {
  const { title, content } = parsePost(formData)

  // Simulate async work (DB write, revalidate, etc.)
  await new Promise((r) => setTimeout(r, 400))

  console.log("submitPost:", { title, content })
  // Revalidate paths/tags here if needed:
  // revalidatePath('/blog')
}

/**
 * Use this with useActionState(createPostWithState, initialState)
 * Signature must be (prevState, payload) => nextState.
 */
export async function createPostWithState(prevState: boolean | null, formData: FormData): Promise<boolean> {
  const { title, content } = parsePost(formData)

  // Simulate async work
  await new Promise((r) => setTimeout(r, 400))

  console.log("createPostWithState:", { title, content })
  // Return the "next state" for useActionState
  return true
}

/**
 * Optional: If you're also using a like button elsewhere.
 */
export async function incrementLike(): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  likeCount += 1
  return likeCount
}
