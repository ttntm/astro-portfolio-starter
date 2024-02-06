interface GenObj {
  [OKey: string]: any
}

interface GenObjWithTags extends GenObj {
  tags: string[]
}

interface NextPrevItem {
  slug: string
  title: string
  description?: string
}

type PortfolioItemData = {
  title: string
  slug: string
  cover: string
  description?: string
  tags: string[]
  referenceUrl?: string,
  itemData: CollectionEntry<'portfolio'>
}
