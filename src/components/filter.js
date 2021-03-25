import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import data from './data.js'

function Filter(props) {
      const history = useHistory();
      const [teams, setTeams] = useState(data);
      const [keyword, setKeyword] = useState("");

      useEffect(() => {
        const keyword = props.location.search.split('?').slice(1).join("?")
        console.log(keyword)
        const test = data.filter(team => {
          return team.toLowerCase().includes(keyword.toLowerCase());
        });
        setTeams(test)
        setKeyword(keyword)

      }, [props.location.search]);

      const filter = (e) => {
        const test = data.filter(team => {
            return team.toLowerCase().includes(e.target.value.toLowerCase());
          });

          setTeams(test);
          setKeyword(e.target.value);
      }

      const handleSearch = (e) => {
        e.preventDefault()
        console.log(keyword);
        if(keyword) {
          history.push(`?${keyword}`) 
        }
      }

      
  return (
    <div className="App">
      <input onChange={filter} type="text" value={keyword} />
      <button type="button" onClick={handleSearch}>Search</button>
      {teams.map((team, i) => ( <p key={i}>{team}</p> ))}
    </div>
  );
}

export default Filter;
