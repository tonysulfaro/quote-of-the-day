import React from 'react'

const Quote = ({ quote }) => {
  return (
    <div
      className="quote"
      style={{ backgroundImage: `url(${quote.background})` }}
    >
      <div className="quoteContent">
        <p>
          <strong>{quote.quote}</strong>
        </p>
        <p>
          <i>{quote.author}</i>
        </p>
      </div>
    </div>
  )
}

export default Quote
