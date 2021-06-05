import React from "react";
import New from './New'

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h2>languages</h2>
      <ul>
        {country.languages.map(language => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img
        src={country.flag}
        alt={country.flag}
        style={{ width: "150px" ,height:"100px"}}
      />
      <New country={country}/>
    </div>
    
  );
};

export default Country;