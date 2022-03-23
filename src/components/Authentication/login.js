import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../theme/style.css';
import apiClient from '../Intercetor/Interceptor';

function LogIn({ history }) {
  const [userLogIn, setUserLogIn] = useState({
    phone_number: '',
    password: '',
  });
  const [records, setRecords] = useState([]);
  const handdleInput = (e) => {
    const InputData = e.target.name;
    const { value } = e.target;

    setUserLogIn({ ...userLogIn, [InputData]: value });
  };

  // password hide function
  function HidePassword() {
    const pass = document.getElementById('password');
    if (pass.type === 'password') {
      pass.type = 'text';
    } else {
      pass.type = 'password';
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userLogIn.phone_number);
    apiClient
      .get(
        `UserDetails?phone_number=eq.${userLogIn.phone_number}&password=eq.${userLogIn.password}&select=*`,
      )
      .then((response) => {
        if (response.data.length > 0) {
          history.push({ pathname: '/' });
        } else {
          // eslint-disable-next-line no-alert
          alert('Incorrect Phone Number or Password');
        }
      })
      .catch((error) => {
        // custom console
        console.log('error in login', error);
      });

    const newData = {
      ...userLogIn,
      id: new Date().getTime().toString(),
    };
    setRecords([...records, newData]);
  };

  return (
    <div className="main_div">
      <form className="signup-form" action="" onSubmit={handleSubmit}>
        <h1 className="heading">LogIn</h1>

        <div className="mb-3">
          <input
            type="tel"
            placeholder="Enter Phone Number"
            className="form-control"
            pattern="[789][0-9]{9}"
            value={userLogIn.phone_number}
            onChange={handdleInput}
            name="phone_number"
            id="phone_number"
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            pattern="(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Enter correct Password"
            required
            value={userLogIn.password}
            onChange={handdleInput}
            name="password"
            id="password"
          />
          <input type="checkbox" onClick={HidePassword} />
          Show Password
        </div>

        <button className="btn-lg btn-dark btn-block" type="submit">
          LogIn
        </button>
      </form>

      {records.map((currentRecord) => {
        const { PhoneNo, Password } = currentRecord;
        // console.log(currentRecord);
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

LogIn.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};
export default LogIn;
