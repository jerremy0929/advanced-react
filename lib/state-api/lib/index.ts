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
  searchTerm?: string
  timestamp: Date
}

class StateApi {
  private data: IndexData
  private subscriptions: { [key: number]: Function }
  private lastSubscriptionsId: number

  constructor(rowData: IData) {
    this.data = {
      articles: <IndexArticle>this.mapIntoObject(rowData.articles),
      authors: <IndexAuthor>this.mapIntoObject(rowData.authors),
      searchTerm: '',
      timestamp: new Date(),
    }
    this.subscriptions = {}
    this.lastSubscriptionsId = 0

    setTimeout(() => {
      const fakeArticle = {
        ...rowData.articles[0],
        id: 'fakeArticleId',
      }
      // this.data.articles[fakeArticle.id] = fakeArticle
      this.data = {
        ...this.data,
        articles: {
          ...this.data.articles,
          [fakeArticle.id]: fakeArticle,
        },
      }
      this.notifySubscripbers()
    }, 1000)
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

  setSearchTerm = (searchTerm: string) => {
    this.mergeWithState({ searchTerm })
  }

  subscribe = (cb: Function) => {
    this.lastSubscriptionsId += 1
    this.subscriptions[this.lastSubscriptionsId] = cb
    return this.lastSubscriptionsId
  }

  unsubscribe = (subscriptionId: number) => {
    delete this.subscriptions[subscriptionId]
  }

  notifySubscripbers = () => {
    Object.values(this.subscriptions).forEach(cb => cb())
  }

  mergeWithState = (stateChange: object) => {
    this.data = {
      ...this.data,
      ...stateChange,
    }
    this.notifySubscripbers()
  }

  startClock = () => {
    setInterval(() => {
      this.mergeWithState({ timestamp: new Date() })
    }, 1000)
  }
}

export default StateApi
