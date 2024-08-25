import React from "react";
import "../Assets/css/Navigation.css";

function Navigation({ albums, page, changePage }) {
  return (
    <div className="navContainer">
      <p>Albums Collection</p>
      {/* Changing the button using the ternary operators */}
      {page === "albumList" ? (
        <button
          className="addBtn"
          onClick={() => {
            changePage("addAlbum");
          }}
        >
          Add Album
        </button>
      ) : (
        <button
          className="addBtn"
          onClick={() => {
            changePage("albumList");
          }}
        >
          Go Back
        </button>
      )}
    </div>
  );
}

export default Navigation;
