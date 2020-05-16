import React from "react"
import ReactDOM from "react-dom"
import { ApolloProvider } from "react-apollo"
import ApolloClient from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"
import "./index.scss"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

const client = new ApolloClient({
  link: createHttpLink({ uri: "https://countries.trevorblades.com" }),
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
