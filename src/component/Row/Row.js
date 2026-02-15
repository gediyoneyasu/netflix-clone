import React, { useState, useEffect } from 'react';
import './Row.css';
import axios from '../../utils/axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [isHovered, setIsHovered] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results || []); // Add fallback empty array
        return request;
      } catch (error) {
        console.error('Error fetching movies:', error);
        setMovies([]); // Set empty array on error
      }
    }
    fetchData();
  }, [fetchUrl]);

  // YouTube player options
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  // Handle movie click to play trailer
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          const videoId = urlParams.get('v');
          console.log('Trailer URL:', url);
          console.log('Extracted Video ID:', videoId);
          setTrailerUrl(videoId);
        })
        .catch((error) => {
          console.log('Trailer not available for this movie:', error);
          // Fallback: you can set a default trailer or show notification
        });
    }
  };

  // Handle mouse enter for hover effect
  const handleMouseEnter = (movieId) => {
    setIsHovered(movieId);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  // Base URL for images
  const baseUrl = 'https://image.tmdb.org/t/p/original/';

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>

      <div className="row_posters">
        {movies && movies.length > 0 ? ( // Check if movies exists and has length
          movies.map((movie) => (
            <div
              key={movie.id}
              className={`row_poster_container ${isHovered === movie.id ? 'hovered' : ''}`}
              onMouseEnter={() => handleMouseEnter(movie.id)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                onClick={() => handleClick(movie)}
                className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.title || movie.name || movie.original_name}
              />
              
              {/* Hover Info - shows on hover */}
              {isHovered === movie.id && (
                <div className="row_poster_info">
                  <h3 className="poster_title">
                    {movie.title || movie.name || movie.original_name}
                  </h3>
                  <div className="poster_buttons">
                    <button className="poster_button play" onClick={() => handleClick(movie)}>
                      ▶ Play
                    </button>
                    <button className="poster_button add">+</button>
                    <button className="poster_button like">👍</button>
                  </div>
                  <p className="poster_rating">
                    Rating: {movie.vote_average}/10
                  </p>
                  <p className="poster_overview">
                    {movie.overview?.length > 100
                      ? movie.overview.substring(0, 100) + '...'
                      : movie.overview}
                  </p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="row_loading">Loading movies...</div> // Show loading state
        )}
      </div>

      {/* YouTube Trailer */}
      {trailerUrl && (
        <div className="row_trailer">
          <YouTube videoId={trailerUrl} opts={opts} />
          <button className="close_trailer" onClick={() => setTrailerUrl('')}>
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default Row;