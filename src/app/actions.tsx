import { revalidatePath } from "next/cache"
import { addEntryToStore } from "./lib/data"

// Server Action used by the form. Keep only actions in this file.
// Note: function-level 'use server' avoids forcing all exports to be actions.
export async function addEntry(formData: FormData): Promise<void> {
  "use server"

  const raw = formData.get("text")
  const text = typeof raw === "string" ? raw.trim() : ""

  if (!text) return

  addEntryToStore(text)
  revalidatePath("/") // update the home page after mutation
}
