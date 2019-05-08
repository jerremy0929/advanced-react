export interface IArticle {
  id: string
  title: string
  date: string
  authorId: string
  body: string
}
export interface IAuthor {
  id: string
  firstName: string
  lastName: string
  website: string
}
export type IndexArticle = {
  [key: string]: IArticle
}
export type IndexAuthor = {
  [key: string]: IAuthor
}
export type IData = {
  articles: IArticle[]
  authors: IAuthor[]
}
type IndexData = {
  articles: IndexArticle
  authors: IndexAuthor
}

class StateApi {
  private data: IndexData

  constructor(rowData: IData) {
    this.data = {
      articles: <IndexArticle>this.mapIntoObject(rowData.articles),
      authors: <IndexAuthor>this.mapIntoObject(rowData.authors),
    }
  }

  mapIntoObject<T extends IArticle | IAuthor>(arr: T[]) {
    return arr.reduce(
      (acc, cur) => {
        acc[cur.id] = cur
        return acc
      },
      <IndexArticle | IndexAuthor>{},
    )
  }

  getState() {
    return this.data
  }

  lookupAuthor(authorId: string): IAuthor {
    return this.data.authors[authorId]
  }
}

export default StateApi
