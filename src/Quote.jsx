import React from 'react'

const Quote = ({ quote }) => {
  return (
    <div className="quote">
      <p>
        <strong>{quote.quote}</strong>
      </p>
      <p>
        <i>{quote.author}</i>
      </p>
      <p>{quote.date}</p>
    </div>
  )
}

export default Quote
