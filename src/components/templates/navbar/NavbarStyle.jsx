import styled from "styled-components";
const NavBarStyle = styled.div`
  padding: 10px;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background: #060c21;
    padding: 0 10px;
    /* width: 100%; */
    /* z-index: 100; */
    position: relative;
  }
  nav::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -1;
  }
  nav::after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -2;
    filter: blur(40px);
  }
  nav::before,
  nav:after {
    background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
  }
  .logo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    /* max-height: 100%; */
  }
  .nav-links {
    padding: 18px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 300px;
  }
  .nav-links li {
    display: inline-block;
    margin: 0 15px;
  }
  .nav-links li .links {
    text-decoration: none;
    color: #fff;
    padding: 5px 0;
    position: relative;
    font-size: 1.2em;
  }
  .nav-links li .links::after {
    content: "";
    background: #ff3d00;
    width: 0;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: width 0.3s;
  }
  .nav-links li .links:hover::after {
    width: 100%;
  }
`;
export default NavBarStyle;