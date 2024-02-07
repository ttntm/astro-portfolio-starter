/**
 * Used to obtain a list of unique tags for a specific content type
 * @param input An array of content objects, i.e. blog posts
 * @returns `string[]`
 */
export function getUniqueTags<T extends GenObjWithTags>(
  input: T[]
): string[] {
  let allTagsList: string[] = []
    
  input.forEach((item: T) => {
    const currentTags = item.tags
    allTagsList = allTagsList.concat(currentTags.map(el => el.toLowerCase()))
  })

  return Array.from(new Set(allTagsList.sort().flat()))
}
