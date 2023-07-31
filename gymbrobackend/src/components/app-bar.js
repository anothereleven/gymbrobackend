import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppBar } from '@mui/material';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">GymBro</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Workouts</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Record Workouts</Link>
          </li>
          <li className="navbar-item">
          <Link to="/BMI" className="nav-link">BMI</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}