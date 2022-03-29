import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../theme/style.css';
import apiClient from '../Intercetor/Interceptor';

function SignUp({ history }) {
  const [userRegistration, setUserRegistration] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password: '',
    // conf_password: '',
  });

  const handdleInput = (event) => {
    const { name } = event.target;
    const { value } = event.target;

    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    apiClient
      .post('UserDetails', userRegistration)
      .then((response) => {
        console.log(response);
        history.push({ pathname: '/login' });
      })
      .catch((error) => {
        console.log(error);
      });
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

  return (
    <div className="main_div">
      <form className="signup-form" action="" onSubmit={handleSubmit}>
        <h1 className="heading">SignIn</h1>

        <div className="mb-3">
          <input
            type="text"
            placeholder="First Name"
            className="form-control"
            autoComplete="off"
            value={userRegistration.first_name}
            onChange={(event) => handdleInput(event)}
            name="first_name"
            id="first_name"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Last Name"
            className="form-control"
            autoComplete="off"
            value={userRegistration.last_name}
            onChange={(event) => handdleInput(event)}
            name="last_name"
            id="last_name"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            autoComplete="off"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Enter valid email"
            required
            value={userRegistration.email}
            onChange={(event) => handdleInput(event)}
            name="email"
            id="email"
          />
        </div>
        <div className="mb-3">
          <input
            type="tel"
            placeholder="Phone Number"
            className="form-control"
            autoComplete="off"
            pattern="[789][0-9]{9}"
            value={userRegistration.phone_number}
            onChange={(event) => handdleInput(event)}
            name="phone_number"
            id="phone_number"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            autoComplete="off"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
            className="form-control"
            value={userRegistration.password}
            onChange={(event) => handdleInput(event)}
            name="password"
            id="password"
          />
          <input type="checkbox" onClick={HidePassword} />
          Show Password
        </div>

        <button className="btn-lg btn-dark btn-block" type="submit">
          SignUp
        </button>
      </form>
    </div>
  );
}

SignUp.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default SignUp;
