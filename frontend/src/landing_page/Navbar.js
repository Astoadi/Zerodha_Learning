import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {useCookies} from 'react-cookie';
import { Link } from "react-router-dom";
import { clientServer } from '../axiosConfig';
function Navbar() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const verifyCookie = async () => {
      const { data } = await clientServer.post(
        "/users/verify",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
        status?setIsLoggedIn(true):setIsLoggedIn(false);
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/login");
  };
  return (
    <>
    <div className="container">
      <nav
        className="navbar navbar-expand-lg bg-white navbar-light fixed-top border-bottom"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container-fluid ">
          <Link className="navbar-brand" to={"/"}>
            <img
              src="media/images/logo.svg"
              style={{ width: "23%", marginLeft:"1rem" }}
              alt="logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ul-list">
                {!isLoggedIn && (
                    <li className="nav-item">
                      <Link className="nav-link signup active" aria-current="page" to={"/signup"} >
                        Signup
                      </Link>
                    </li>
                  )}
                  {isLoggedIn && (
                  <>
                    {isLoggedIn && (
                      <>
                        <li className="nav-item mt-2">
                          <button className="btn btn-outline-danger w-100" onClick={Logout}>
                            Logout
                          </button>
                        </li>
                        <li className="nav-item mt-2 ms-2">
                          <a
                            className="btn btn-outline-primary w-100"
                            href="http://localhost:3001/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Dashboard
                          </a>
                        </li>
                      </>
                    )}

                  </>
                  )}
            
                <li className="nav-item">
                  <Link className="nav-link active" to={"/about"}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-disabled="true" to={"/product"}>
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-disabled="true" to={"/pricing"}>
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-disabled="true" to={"/support"}>
                    Support
                  </Link>
                </li>
                
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
}

export default Navbar;
