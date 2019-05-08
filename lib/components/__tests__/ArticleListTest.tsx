import React from 'react'
import ArticleList from '../ArticleList'
// tslint:disable-next-line: no-implicit-dependencies
import StateApi, { IndexArticle } from 'state-api'
import renderer from 'react-test-renderer'
import dummy from '../../testData.json'

const store = new StateApi(dummy.data)

describe('ArticleList', () => {
  const testProps: {
    articles: IndexArticle
    store: StateApi
  } = {
    store,
    articles: store.getState().articles,
  }

  it('renders correctly', () => {
    // const element = renderer.create(<div>Hello</div>).toJSON()
    // console.log(element)

    const tree = renderer.create(<ArticleList {...testProps} />).toJSON()
    // console.log(tree)
    // expect(tree!.children!.length).toBe(2)
    expect(tree).toMatchInlineSnapshot(`
      <div>
        <div
          style={
            Object {
              "border": "1px solid #aaa",
              "marginBottom": 10,
              "paddingBottom": 10,
            }
          }
        >
          <div
            style={
              Object {
                "fontWeight": "bold",
              }
            }
          >
            Introducing React's Error Code System
          </div>
          <div
            style={
              Object {
                "color": "#888",
                "fontSize": "0.8em",
              }
            }
          >
            Mon Jul 11 2016
          </div>
          <div
            style={
              Object {
                "paddingBottom": 10,
                "paddingTop": 10,
              }
            }
          >
            <a
              href="https://twitter.com/keyanzhang"
            >
              Keyan
               
              Zhang
            </a>
          </div>
          <div
            style={
              Object {
                "paddingLeft": 20,
              }
            }
          >
            Building a better developer experience has been one of the things that React deeply cares about, and a crucial part of it is to detect anti-patterns/potential errors early and provide helpful error messages when things (may) go wrong. However, most of these only exist in development mode; in production, we avoid having extra expensive assertions and sending down full error messages in order to reduce the number of bytes sent over the wire.
          </div>
        </div>
        <div
          style={
            Object {
              "border": "1px solid #aaa",
              "marginBottom": 10,
              "paddingBottom": 10,
            }
          }
        >
          <div
            style={
              Object {
                "fontWeight": "bold",
              }
            }
          >
            Mixins Considered Harmful
          </div>
          <div
            style={
              Object {
                "color": "#888",
                "fontSize": "0.8em",
              }
            }
          >
            Wed Jul 13 2016
          </div>
          <div
            style={
              Object {
                "paddingBottom": 10,
                "paddingTop": 10,
              }
            }
          >
            <a
              href="https://twitter.com/dan_abramov"
            >
              Dan
               
              Abramov
            </a>
          </div>
          <div
            style={
              Object {
                "paddingLeft": 20,
              }
            }
          >
            “How do I share the code between several components?” is one of the first questions that people ask when they learn React. Our answer has always been to use component composition for code reuse. You can define a component and use it in several other components. 
      It is not always obvious how a certain pattern can be solved with composition. React is influenced by functional programming but it came into the field that was dominated by object-oriented libraries. It was hard for engineers both inside and outside of Facebook to give up on the patterns they were used to.
          </div>
        </div>
        <div
          style={
            Object {
              "border": "1px solid #aaa",
              "marginBottom": 10,
              "paddingBottom": 10,
            }
          }
        >
          <div
            style={
              Object {
                "fontWeight": "bold",
              }
            }
          >
            Create Apps with No Configuration
          </div>
          <div
            style={
              Object {
                "color": "#888",
                "fontSize": "0.8em",
              }
            }
          >
            Fri Jul 22 2016
          </div>
          <div
            style={
              Object {
                "paddingBottom": 10,
                "paddingTop": 10,
              }
            }
          >
            <a
              href="https://twitter.com/dan_abramov"
            >
              Dan
               
              Abramov
            </a>
          </div>
          <div
            style={
              Object {
                "paddingLeft": 20,
              }
            }
          >
            Create React App is a new officially supported way to create single-page React applications. It offers a modern build setup with no configuration. 

      Getting Starte 
      Installation 
      First, install the global package:
          </div>
        </div>
        <div
          style={
            Object {
              "border": "1px solid #aaa",
              "marginBottom": 10,
              "paddingBottom": 10,
            }
          }
        >
          <div
            style={
              Object {
                "fontWeight": "bold",
              }
            }
          >
            Relay: State of the State
          </div>
          <div
            style={
              Object {
                "color": "#888",
                "fontSize": "0.8em",
              }
            }
          >
            Fri Aug 05 2016
          </div>
          <div
            style={
              Object {
                "paddingBottom": 10,
                "paddingTop": 10,
              }
            }
          >
            <a
              href="https://twitter.com/en_JS"
            >
              Joseph
               
              Savona
            </a>
          </div>
          <div
            style={
              Object {
                "paddingLeft": 20,
              }
            }
          >
            This month marks a year since we released Relay and we'd like to share an update on the project and what's next. 
      A Year In Review 
      A year after launch, we're incredibly excited to see an active community forming around Relay and that companies such as Twitter are using Relay in production:
          </div>
        </div>
        <div
          style={
            Object {
              "border": "1px solid #aaa",
              "marginBottom": 10,
              "paddingBottom": 10,
            }
          }
        >
          <div
            style={
              Object {
                "fontWeight": "bold",
              }
            }
          >
            React v15.5.0
          </div>
          <div
            style={
              Object {
                "color": "#888",
                "fontSize": "0.8em",
              }
            }
          >
            Fri Apr 07 2017
          </div>
          <div
            style={
              Object {
                "paddingBottom": 10,
                "paddingTop": 10,
              }
            }
          >
            <a
              href="https://twitter.com/acdlite"
            >
              Andrew
               
              Clark
            </a>
          </div>
          <div
            style={
              Object {
                "paddingLeft": 20,
              }
            }
          >
            It's been exactly one year since the last breaking change to React. Our next major release, React 16, will include some exciting improvements, including a complete rewrite of React's internals. We take stability seriously, and are committed to bringing those improvements to all of our users with minimal effort.
       To that end, today we're releasing React 15.5.0.
          </div>
        </div>
      </div>
    `)
  })
})
