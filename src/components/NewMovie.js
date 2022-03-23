import React, { useState } from 'react';
import './theme/style.css';
import UploadAndDisplayImage from './theme/UploadImg';

function AddingMovie() {
  const [Data, setData] = useState({
    movie_name: '',
    genre: '',
    Director: '',
    cast: '',
  });
  const [records, setRecords] = useState([]);
  const handdleInput = (e) => {
    const InputData = e.target.name;
    const {value} = e.target;

    setData({ ...Data, [InputData]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      ...Data,
      id: new Date().getTime().toString(),
    };
    setRecords([...records, newData]);
  };

  return (
    <div className="main_div">
      <form className="signup-form" action="" onSubmit={handleSubmit}>
        <h1 className="heading">Create Record</h1>

        <div className="mb-3">
          {/* <label htmlFor="phone_number"> </label> */}

          <input
            type="text"
            placeholder="Enter Movie Name"
            className="form-control"
            value={Data.movie_name}
            onChange={handdleInput}
            name="movie_name"
            id="movie_name"
          />
        </div>
        <div className="mb-3">
          Genre:
          <select
            id="genre"
            name="genre"
            onChange={handdleInput}
            value={Data.genre}
          >
            <option value="Action">Action</option>
            <option value="Thriller">Thriller</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
          </select>
        </div>
        <div className="mb-3">
          {/* <label htmlFor="password"> </label> */}
          <input
            type="text"
            placeholder="Enter Director Name"
            className="form-control"
            value={Data.Director}
            onChange={handdleInput}
            name="Director"
            id="Director"
          />
        </div>
        <div className="mb-3">
          {/* <label htmlFor="password"> </label> */}
          <input
            type="text"
            placeholder="Enter Artist Names"
            className="form-control"
            value={Data.cast}
            onChange={handdleInput}
            name="cast"
            id="cast"
          />
        </div>
        <UploadAndDisplayImage />
        <button className="btn-lg btn-dark btn-block" type="submit">
          Add
        </button>
      </form>

      {records.map((currentRecord) => {
        const { PhoneNo, Password } = currentRecord;
        console.log(currentRecord);
        return (
          <div className="showData" key={currentRecord.id}>
            <p>{PhoneNo}</p>
            <p>{Password}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AddingMovie;
