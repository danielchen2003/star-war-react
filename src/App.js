import React, { Fragment, useState, useEffect } from "react"
import axios from "axios"
import "./App.css"
// import data from "./service/sw-api"
import Cards from "./components/Cards"
import Header from "./components/Header"
import Pagination from "./components/Pagination"
import background from "./image/background.jpeg"

function App() {
  const [data, setData] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState(
    `https://swapi.dev/api/starships/`
  )
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const result = axios.get(currentPageUrl).then((res) => {
      // console.log(res.data.results)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setData(
        res.data.results.map((ship) => {
          return {
            name: ship.name,
            model: ship.model,
            cargo_capacity: ship.cargo_capacity,
          }
        })
      )
      setLoading(false)
      // setData(res.data.results)
    })
  }, [currentPageUrl])

  if (loading) return `It's loading.... right now`

  const toPreviousPage = () => {
    return setCurrentPageUrl(prevPageUrl)
  }

  const toNextPage = () => {
    return setCurrentPageUrl(nextPageUrl)
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <Cards shipInfo={data} />
      <Pagination
        toPreviousPage={toPreviousPage}
        toNextPage={nextPageUrl ? toNextPage : null}
        // gotoNextPage={nextPageUrl ? gotoNextPage : null}
        prevPageUrl={prevPageUrl}
      />
    </div>
  )
}

export default App

// import React, { useState, useEffect } from "react"
// import "./App.css"
// import PokemonList from "./PokemonList"
// import axios from "axios"
// import Fenye from "./Fenye"

// function App() {
//   const [pokemon, setPokemon] = useState([])
//   const [currentPageUrl, setCurrentPageUrl] = useState(
//     "https://pokeapi.co/api/v2/pokemon"
//   )
//   const [nextPageUrl, setNextPageUrl] = useState()
//   const [prevPageUrl, setPrevPageUrl] = useState()
//   const [loading, setLoading] = useState(true)

// useEffect(() => {
//   setLoading(true)
//   let cancel

//   axios
//     .get(currentPageUrl, {
//       cancelToken: new axios.CancelToken((c) => (cancel = c)),
//     })
//     .then((res) => {
//       setLoading(false)
//       setNextPageUrl(res.data.next)
//       setPrevPageUrl(res.data.privious)
//       setPokemon(res.data.results.map((p) => p.name))
//     })
//   return () => cancel()
// }, [currentPageUrl])
