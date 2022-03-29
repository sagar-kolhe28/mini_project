import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
function Navbar({ path }) {
  const history = useHistory();

  const redirect = () => {
    history.push('/SignUp');
  };
  const redirect1 = () => {
    history.push('/LogIn');
  };
  const redirect2 = () => {
    history.push('/');
  };

  const Mcontainer = styled.div`
    display: flx;
    flex-direction: column;
    margin: 4px;
    box-shadow: 0 3px 10px 0 #aaa;
  `;
  console.log(path);

  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Mcontainer>
            <button
              className="btn btn-danger"
              onClick={redirect2}
              type="submit"
            >
              BookMyMovie
            </button>
          </Mcontainer>
          {window.location.pathname === '/' ? (
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0" />
              <Mcontainer>
                <button
                  className="btn btn-outline-success"
                  onClick={redirect}
                  type="submit"
                >
                  SignIn
                </button>
              </Mcontainer>
              already have an account !
              <Mcontainer>
                <button
                  className="btn btn-outline-success"
                  onClick={redirect1}
                  type="submit"
                >
                  LogIn
                </button>
              </Mcontainer>
            </div>
          ) : null}
        </div>
      </nav>
    </section>
  );
}
export default Navbar;
