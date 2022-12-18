import React from 'react'
import { Link } from "react-router-dom";

const list = ({ teams }) => {

  //Name to slug
  const slugify = (str) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  return (
    <div className="table">
      <ul>
        {teams.map((team, i) => (
          <li key={i} >
            {i + 1}. <Link to={`/page/${slugify(team)}/`}  >{team}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default list