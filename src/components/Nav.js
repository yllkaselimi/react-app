import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navigation = ({user, setUser}) => {
  const navigate = useNavigate()

  const handleLogout = e => {
    localStorage.removeItem('loggedin')
    setUser(null)
    navigate('/')
  }

  return (
    <nav className="mb-[-64px] z-10 relative p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/"  className='font-black text-2xl text-white uppercase '>
            PASTROKOSOVEN
          </Link>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className="text-gray-200 hover:text-white transition duration-300"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/raporto"
                className="text-gray-200 hover:text-white transition duration-300"
              >
                Raporto
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/evente"
                className="text-gray-200 hover:text-white transition duration-300"
              >
                Evente
              </NavLink>
            </li>
            <li className="relative group">
              <a
                href="#"
                className="block py-2 px-4 text-white dropdown-toggle"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {( user !== null) ? user : 'Guest'}
              </a>
              <ul className="hidden absolute left-0 space-y-2 bg-white text-gray-700 group-hover:block">
                {(user === null) ? (
                  <>
                    <li>
                      <a href="/login" className="block px-4 py-2 hover:bg-gray-100">Login</a>
                    </li>
                    <li>
                      <a href="/register" className="block px-4 py-2 hover:bg-gray-100">Register</a>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <a href="/raporto" className="block px-4 py-2 hover:bg-gray-100">Raporto</a>
                    </li>
                    <li>
                      <button onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-100">Logout</button>
                    </li>
                  </>
                )}
              </ul>
          </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;