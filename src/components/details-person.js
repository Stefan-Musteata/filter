import React, { useState, useEffect } from 'react'
import data from './data.js';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const DetailsPerson = (props) => {
  //useHistory
  const history = useHistory();
  const [person, setPerson] = useState(data)

  //useEffect
  useEffect(() => {

    ///transform slug to string
    const keyword = props.match.params.slug.replace(/-/g, " ")


    //Data filter
    const data_filter = data.filter(team => {
      return team.toLowerCase().includes(keyword.toLowerCase());
    });

    //useState
    setPerson(data_filter)
  }, []);



  //Get only name from arrau
  const name = person[0]


  return (
    <div className="container">
      <div><Link to="#" onClick={() => history.goBack()}>← Go back </Link> About person:</div>
      <h1>Name: {name}</h1>
    </div>
  )
}

export default DetailsPerson