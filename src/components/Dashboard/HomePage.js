import React from 'react';
import styled from 'styled-components';

const Mcontainer = styled.div`
  display: flx;
  flex-direction: column;
  padding: 10px;
  margin: 20px;
  width: 260px;
  height: 600px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;

function HomePage() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <Mcontainer>
        <div className="card h-100">
          <img
            src="https://m.media-amazon.com/images/M/MV5BYmE3YmNiM2YtM2MxMi00ZDhmLTk1ZTQtODdjOWY4YjVkYThmXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Golmaal</h5>
            <p className="card-text">
              Golmaal is an Indian comedy film series directed by Rohit Shetty,
              with four installments to date, the first three produced by Dhilin
              Mehta and the fourth by Shetty and Sangeeta Ahir
            </p>
          </div>
        </div>
      </Mcontainer>
      {/* </div> */}
      <Mcontainer>
        {/* <div className="col"> */}
        <div className="card h-100">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNWUyY2M1OTEtOWU2OC00OWQ0LTk3MWItZjJlZWYxZDk5NTg4XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_FMjpg_UX1000_.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Golmaal Returns</h5>
            <p className="card-text">
              2008 Indian Hindi-language comedy film directed by Rohit Shetty,
              written by Yunus Sajawal and Farhad-Sajid{' '}
            </p>
          </div>
        </div>
      </Mcontainer>
      {/* </div> */}
      <Mcontainer>
        {/* <div className="col"> */}
        <div className="card h-100">
          <img
            src="https://m.media-amazon.com/images/M/MV5BMTllZDJhMTAtMjhmZi00MzBjLTljMmQtMmNlYTAwYmY0Y2Q0XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Golmaal 3</h5>
            <p className="card-text">
              2010 Indian Hindi-language action comedy film directed by Rohit
              Shetty. A sequel to the 2008 film Golmaal Returns
            </p>
          </div>
        </div>
      </Mcontainer>
      {/* </div> */}
      <Mcontainer>
        {/* <div className="col"> */}
        <div className="card h-100">
          <img
            src="https://m.media-amazon.com/images/M/MV5BYmI5Y2JkNzUtNWJkZC00OTE1LTg3ZDItMjQ0Mzc1MjdhMzhiXkEyXkFqcGdeQXVyMjQwOTU5NTg@._V1_.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Golmaal Again</h5>
            <p className="card-text">
              Five orphan men return to the orphanage they grew up in to attend
              their mentors funeral.they encounter the ghost of their childhood
              friend, Khushi.
            </p>
          </div>
        </div>
      </Mcontainer>
      {/* </div> */}
    </div>
  );
}
export default HomePage;
