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

/**
 * Sorts objects based on a specific key using an optional `primer` function
 */
export function objectSort(
  field: string,
  reverse: boolean,
  primer: Function | undefined = undefined
): (a: any, b:any) => number {
  const key = primer
    ? (x: GenObj) => primer(x[field])
    : (x: GenObj) => x[field]
  
  const reversed = !reverse ? 1 : -1

  return function(a: any, b:any) {
    return a = key(a), b = key(b), reversed * (Number(a > b) - Number(b > a))
  }
}

/**
 * Reusable debounce function
 */
export function useDebounce(callback: Function, wait: number) {
  let timeout: ReturnType<typeof setTimeout>
  
  return function(...args: any[]) {
    const context = this
    
    clearTimeout(timeout)
    
    timeout = setTimeout(
      () => callback.apply(context, args),
      wait
    )
  }
}
