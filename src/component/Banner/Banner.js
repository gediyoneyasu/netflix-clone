import React, { useEffect, useState } from 'react'

import './Banner.css'
import requests from '../../utils/requests'
import axios from '../../utils/axios'


const Banner = () => {
const [movie, setMovie] = React.useState({});
useEffect(() => {
  async function fetchData() {
    try {
      const response = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ]
      );
    } catch (error) {
      console.error("Error fetching Netflix Originals:", error);
    }
  }

  fetchData();
}, []);

return (
<div className='Banner' style={{
    backgroundSize: "cover",
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
}}>
    <div className='Banner_contents'>
        <h1 className='Banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className='Banner_buttons'>
            <button className='Banner_button'>Play</button>
            <button className='Banner_button'>My List</button>
        </div>
        <h1 className='Banner_description'>{movie?.overview}</h1>
    </div>
    {/* <div className='Banner_fadeBottom'></div> */}

    

</div>

)

}

export default Banner
