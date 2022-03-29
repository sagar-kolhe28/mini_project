import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import apiClient from '../Intercetor/Interceptor';
// import UpdateMovieDetails from '../UpdateMovieDetails';

// import HomePage from './Homepage';

const Mcontainer = styled.div`
  display: flx;
  flex-direction: column;
  padding: 10px;
  margin: 20px;
  width: 280px;
  height: 650px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;

const CoverImage = styled.img`
  /width: 240px;
  height: 500px;
`;

const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

// eslint-disable-next-line react/prop-types
function MovieCard({ moviename, genre, director, cast, link }) {
  const history = useHistory();
  // const location = useLocation();
  const redirect = () => {
    history.push({
      pathname: '/updatedetails',
      state: {
        moviename1: 'moviename',
        genre1: 'genre',
        director1: 'director',
        cast1: 'cast',
      },
    });
  };
  const deleteMovie = () => {
    // const history = useHistory();
    apiClient
      .delete(`MovieDetails?MovieName=eq.${moviename}`)
      .then((response) => {
        console.log(response);
        alert('Movie deleted sucessfully');
        history.push({ pathname: '/' });
      })
      .catch((error) => {
        console.log('error in deleting movie record', error);
      });
  };
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <Mcontainer>
        <div className="card h-100">
          <CoverImage src={link} className="card-img-top" alt="..." />
          <div className="card-body">
            <MovieName>{moviename}</MovieName>
            <div className="card-text">
              <h6>{genre}</h6>
            </div>
            <div className="card-text">
              <h6>Director: {director}</h6>
            </div>
            <div className="card-text">
              <h6>Cast: {cast}</h6>
            </div>
          </div>
          <button type="button" onClick={redirect} className="btn btn-primary">
            Edit
            {/* <UpdateMovieDetails
              moviename={moviename} /> */}
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteMovie(moviename)}
          >
            Delete
          </button>
        </div>
      </Mcontainer>
    </div>
  );
}
MovieCard.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default MovieCard;
