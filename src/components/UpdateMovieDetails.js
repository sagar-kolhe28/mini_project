import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './theme/style.css';
import apiClient from './Intercetor/Interceptor';
//  import UploadAndDisplayImage from './theme/UploadImg';

function UpdateMovieDetails({ history }) {
  const [Data, setData] = useState({
    MovieName: '',
    Genre: '',
    Director: '',
    Cast: '',
  });
  const [records, setRecords] = useState([]);

  const handdleInput = (event) => {
    const InputData = event.target.name;
    const { value } = event.target;

    setData({ ...Data, [InputData]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    apiClient
      .post(`MovieDetails?MovieName=eq.`)
      .then((response) => {
        console.log(response);
        history.push({ pathname: '/Dashboard' });
      })
      .catch((error) => {
        console.log(error);
      });

    const newData = {
      ...Data,
      id: new Date().getTime().toString(),
    };
    setRecords([...records, newData]);
  };

  return (
    <div className="main_div">
      <form className="signup-form" action="" onSubmit={handleSubmit}>
        <h1 className="heading">Update Movie Details</h1>

        <div className="mb-3">
          <input
            type="text"
            placeholder="Enter Movie Name"
            className="form-control"
            value={Data.MovieName}
            onChange={(event) => handdleInput(event)}
            name="MovieName"
            id="MovieName"
          />
        </div>
        <div className="mb-3">
          Genre:
          <select
            id="Genre"
            name="Genre"
            onChange={(event) => handdleInput(event)}
            value={Data.Genre}
          >
            <option value="Action">Action</option>
            <option value="Thriller">Thriller</option>
            <option value="Animation">Animation</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
          </select>
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Enter Director Name"
            className="form-control"
            value={Data.Director}
            onChange={(event) => handdleInput(event)}
            name="Director"
            id="Director"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Enter Artist Names"
            className="form-control"
            value={Data.Cast}
            onChange={(event) => handdleInput(event)}
            name="Cast"
            id="Cast"
          />
        </div>
        {/* <UploadAndDisplayImage /> */}
        <button className="btn-lg btn-dark btn-block" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}

UpdateMovieDetails.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};
export default UpdateMovieDetails;
