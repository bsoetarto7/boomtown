import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const NotFound = () => {
  return(
    <section className="boom-notfound">
      <div>
        <h1>Page not found</h1>
        <p>Looks like the page you were looking for is unavailable, please <Link to='/'>click here</Link> to go back to home page.</p>
      </div>
    </section>
  )
};

export default NotFound;