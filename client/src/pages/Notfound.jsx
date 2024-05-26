import React from 'react';
import './NotFound.css'; // Importing the CSS for styling

const Notfound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <a href="/">Go to Homepage</a>
        </div>
    );
}

export default Notfound;
