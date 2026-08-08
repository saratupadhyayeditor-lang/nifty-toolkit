export function wordCount(text) {
  const trimmed = String(text).trim()
  if (trimmed.length === 0) {
    return { words: 0, lines: 0, characters: 0 }
  }
  return {
    words: trimmed.split(/\s+/).length,
    lines: trimmed.split(/\n/).length,
    characters: trimmed.length,
  }
}
