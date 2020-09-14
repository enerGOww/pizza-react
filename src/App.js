import React from "react"
import axios from "axios"
import "./scss/app.scss"
import {Route} from "react-router-dom"
import {Cart, Home} from "./pages"
import {Header} from "./components"

function App() {
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then(({data}) => setItems(data.pizzas))
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={items} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  )
}

export default App
