import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import data from './data';
import { List, Form } from './index'


function Filter(props) {
  //useHistory
  const history = useHistory();

  //UseState
  const [teams, setTeams] = useState(data);
  const [keyword, setKeyword] = useState("");

  //useEffect
  useEffect(() => {

    ///keywords in search input
    const keyword = props.location.search.split('?').slice(1).join("?")

    //Data filter
    const data_filter = data.filter(team => {
      return team.toLowerCase().includes(keyword.toLowerCase());
    });

    //useState
    setTeams(data_filter)
    setKeyword(keyword)

  }, [props.location.search]);

  //Filter
  const filter = (e) => {
    const data_filter = data.filter(team => {
      return team.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setTeams(data_filter);
    setKeyword(e.target.value);

    history.push(`?${e.target.value}`)
  }

  //HandleSearch
  const handleSearch = (e) => {
    e.preventDefault()

    if (keyword) {
      history.push(`?${keyword}`)
    }
  }

  //Handle clear input search 
  const handleClear = () => {
    setKeyword('');
    history.push(``)
  }

  return (
    <div className="container">
      {/* Form */}
      <Form
        filter={filter}
        keyword={keyword}
        handleSearch={handleSearch}
        handleClear={handleClear} />

      {/* List of people */}
      <List teams={teams} />

    </div>
  );
}

export default Filter;
