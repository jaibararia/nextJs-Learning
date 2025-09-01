import { submitPost } from "../action"

export function Form() {
  return (
    <form action={submitPost} className="space-y-3">
      <div>
        <label htmlFor="title" className="block text-sm font-medium">
          Title
        </label>
        <input id="title" type="text" name="title" required className="border rounded px-3 py-2 w-full" />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium">
          Content
        </label>
        <input id="content" type="text" name="content" required className="border rounded px-3 py-2 w-full" />
      </div>

      <button type="submit" className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700">
        Create
      </button>
    </form>
  )
}
