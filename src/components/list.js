import React from 'react'

const list = ({ teams }) => {
  return (
    <div className="table">
      <ul>
        {teams.map((team, i) => (
          <li key={i}>{i + 1}. {team}</li>
        ))}
      </ul>
    </div>
  )
}

export default list