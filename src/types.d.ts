interface GenObj {
  [OKey: string]: any
}

interface GenObjWithTags extends GenObj {
  tags: string[]
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
