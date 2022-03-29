import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import apiClient from '../Intercetor/Interceptor';
import MovieCard from './MovieCard';
import '../../App.css';

function HomePage() {
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const fetchPosts = async () => {
      // setLoading(true);

      apiClient
        .get('MovieDetails?select=*', posts)
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) => {
          console.log('error during loading dashboard', error);
        });
    };

    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const redirect = () => {
    history.push('/AddMovie');
  };

  return (
    <nav>
      <h1 className="card-text">Recommended Movies </h1>
      {/* {
        window.location.pathname !== "/" ? */}

      <button className="btn btn-secondary" onClick={redirect} type="submit">
        Add Movie
      </button>
      {/* :
          null
      } */}
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {posts.map((post) => (
          <div key={post} className="page-item">
            <MovieCard
              moviename={post.MovieName}
              genre={post.Genre}
              director={post.Director}
              cast={post.Cast}
              link={post.Poster}
            />
          </div>
        ))}
      </div>
    </nav>
  );
}

export default HomePage;
