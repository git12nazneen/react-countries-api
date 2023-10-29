import React from 'react';
import'./Country.css'
const Country = (props) => {
    console.log(props.country)
    const{area,region,population,name,flags} = props.country;
    return (
        <div className='country'>
            <h3>Country name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p><small>Region:{region}</small></p>
            <p><small>Population:{population}</small></p>
        </div>
    );
};

export default Country;