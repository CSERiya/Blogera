import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bloging from '../comps/imagesfol/images.png';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = () => {
      const userLoggedIn = localStorage.getItem('loggedInUser');
      setIsLoggedIn(!!userLoggedIn); 
    };

    checkLoginStatus(); 

    const handleLoginStatusChange = () => {
      checkLoginStatus();
    };

    window.addEventListener('loginStatusChange', handleLoginStatusChange);
    window.addEventListener('storage', handleLoginStatusChange); 

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('loginStatusChange', handleLoginStatusChange);
      window.removeEventListener('storage', handleLoginStatusChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser'); 
    setIsLoggedIn(false); 
    navigate('/login'); 
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img className='logo-img' src={bloging} alt='logo' />
        <Link className="navbar-brand" to="/">Blogera</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <Link to='/home'>Home</Link>
            </li>
            <li className="nav-item mx-3">
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            {isLoggedIn ? (
              <button className="btn btn-outline-danger" type="button" onClick={handleLogout}>Logout</button>
            ) : (
              <Link to='/signup'>
                <button className="btn btn-outline-success" type="button">+Add Blog</button>
              </Link>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
