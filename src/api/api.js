import axios from 'axios';

const getBeers = async () => {
    const data = await axios.get('https://api.punkapi.com/v2/beers');
    return data;
}

const getBeersAbv = async (abv) => {
    const data = await axios.get(`https://api.punkapi.com/v2/beers?abv_lt=${abv}`);
    return data;
}

const getBeersIbu = async (ibu) => {
    const data = await axios.get(`https://api.punkapi.com/v2/beers?ibu_lt=${ibu}`);
    return data;
}

export { getBeers, getBeersAbv, getBeersIbu };