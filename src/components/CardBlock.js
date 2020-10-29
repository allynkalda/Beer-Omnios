import React, { useEffect, useState } from 'react';
import { useStateValue } from '../store/state';
import { getBeers, getBeersAbv, getBeersIbu } from '../api/api'
// import { Carousel } from 'react-responsive-carousel'; No time! :(
import SelectInput from './SelectInput';


export default function CardBlock() {
    const [ { beers, abvData, ibuData }, dispatch ] = useStateValue();
    const [ beerData, setBeerData ] = useState(beers);
    const [ ibu, setIbu ] = useState(80);
    const [ abv, setAbv ] = useState(11);

    useEffect(() => {
        getBeers().then(result => {
          const data = result.data;
          setBeerData(data)
          dispatch({ type: 'set_beers', beers: data })
          });
      }, [ setBeerData ])


      const displayBeers = () => {
          return beerData.map(beer => {
              return (
                    <div className="card">
                        <img style={{ width: '100px'}} src={beer.image_url} alt="beer"></img>
                        <h4>{beer.name}</h4>
                        <p>ABV: {beer.abv}</p>
                        <p>IBU: {beer.ibu}</p>
                        <p>{beer.description}</p>
                    </div>
              )
        })
      }

      const handleChangeIbu = (event) => {
        const value = event.target.value;
        setIbu(value);
        getBeersIbu(value).then(result => {
            const data = result.data;
            setBeerData(data);
            dispatch({ type: 'set_beers', beers: data })
            });
            // dispatch ibu
      };

      const handleChangeAbv = (event) => {
        const value = event.target.value;
        setAbv(value);
        getBeersAbv(value).then(result => {
            const data = result.data;
            setBeerData(data);
            dispatch({ type: 'set_beers', beers: data })
            });
            // dispatch abv
      };

    return (
        <div className="App" >
            <h1>Beers beers beers!</h1>
            <h4>Filter by:</h4>
            <div className="flex">
            <SelectInput handleChange={handleChangeIbu} name={"IBU Limit"} val={ibu} ibu/>
            <SelectInput handleChange={handleChangeAbv} name={"ABV Limit"} val={abv}/>
            </div>
            {beerData.length && displayBeers()}
        </div>
    )
}
