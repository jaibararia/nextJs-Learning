export type Entry = {
    id: number
    text: string
    createdAt: string
  }
  
  // In-memory store (resets on server restart)
  const entries: Entry[] = []
  
  // Read helper: OK in a regular module (no 'use server')
  export function getEntries(): Entry[] {
    // newest first
    return [...entries].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
  }
  
  // Write helper used by the Server Action
  export function addEntryToStore(text: string) {
    entries.push({
      id: Date.now(),
      text,
      createdAt: new Date().toISOString(),
    })
  }
  