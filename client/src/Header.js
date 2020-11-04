import React from "react";
import Search from "./Search";
import Navbar from "react-bootstrap/Navbar";

const Header = ({ setShowResults, setSearchTerm }) => {
  return (
    <Navbar className="header" bg="light">
      <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Brand>SwellPlus</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Search setShowResults={setShowResults} setSearchTerm={setSearchTerm} />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
