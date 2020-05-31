import React from "react"
import PageHeader from "./components/PageHeader"
import { Route, Switch } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"

function App() {
  return (
    <div className='App'>
      <PageHeader logoName='developergarten' />
      <Switch>
        <Route path='/register' component={RegisterPage} />
      </Switch>
    </div>
  )
}

export default App
