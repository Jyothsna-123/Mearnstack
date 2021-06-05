import React from 'react'
import Country from './Country'


const Search = ({ countries, newfilter }) => {
    const filtered = countries.filter(country =>
      country.name.toUpperCase().includes(newfilter.toUpperCase())
    );
    const listLen = filtered.length;
    console.log(filtered);
    if(newfilter===''){
          return <div />
    }
    else{

     if (listLen >= 10) {
      return <div>Too many matches, specify another letter(s)</div>;
    }
  
    else if (listLen > 1 && listLen < 10) {
      return filtered.map(country => (
        <div key={country.name}>
          {country.name}
          
        </div>
      ));
    } 
    else {
      return (
        <div>
          <Country country={filtered[0]} />
        </div>
      );
    }
}
  };
export default Search