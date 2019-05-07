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
type IData = {
  articles: IArticle[]
  authors: IAuthor[]
}

class DataApi {
  constructor(private rowData: IData) {}

  // tslint:disable-next-line: prefer-array-literal
  mapIntoObject<T extends IArticle | IAuthor>(arr: T[]) {
    return arr.reduce(
      (acc, cur) => {
        acc[cur.id] = cur
        return acc
      },
      <IndexArticle | IndexAuthor>{},
    )
  }

  getArticles() {
    return <IndexArticle>this.mapIntoObject(this.rowData.articles)
  }

  getAuthors() {
    return <IndexAuthor>this.mapIntoObject(this.rowData.authors)
  }
}

export default DataApi
