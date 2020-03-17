import React, { useState } from 'react'
import Quote from './Quote'

function App() {
  const [quote, setQuote] = useState([])

  async function getQOD() {
    const response = await fetch('https://quotes.rest/qod.json')
    const json = await response.json()
    setQuote(json)
  }

  if (quote == '') {
    getQOD()
  }

  const quoteElement = () => {
    if (quote == '') {
      return <h1>No Quote Yet</h1>
    } else {
      return <Quote quote={quote.contents.quotes[0]}></Quote>
    }
  }

  return <div className="App">{quoteElement()}</div>
}

export default App
