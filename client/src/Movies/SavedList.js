import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class SavedList extends Component {

  render() {
    console.log(this.props);
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
            key={movie.id}
            to={`/movies/${movie.id}`}
          >
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
        ))}
        <Link to="/">
          <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}
