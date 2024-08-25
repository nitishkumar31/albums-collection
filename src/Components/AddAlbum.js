// importing react, useState renderHook, css file and toastify
import React, { useState } from "react";
import "../Assets/css/addAlbum.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddAlbum({ album, addData }) {
  // Using states to store the title and userId
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");

  function addUser(e) {
    e.preventDefault();

    // Copying the data in a new variable and adding the new data
    let newData = [
      ...album,
      { userId: userId, title: title, id: album.length + 1 },
    ];
    // Updating the state
    addData(newData);
    let message = (
      <p>
        Album Added. <strong>UserId is {userId}</strong>
      </p>
    );
    // Displaying the message using toastify
    toast.success(message);
    // Changing the states to initial values
    setTitle("");
    setUserId("");
  }
  return (
    <div className="container">
      <form>
        <label>
          Title
          {/* Input to take Title */}
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          ></input>
        </label>
        <label>
          Id
          {/* Input to take UserId */}
          <input
            type="number"
            value={userId}
            onChange={(e) => {
              setUserId(e.target.value);
            }}
            required
          ></input>
        </label>
        {/* Button to submit the title and UserId, updating the state and rendering the component. */}
        <button
          className="submitBtn"
          type="submit"
          onClick={(e) => {
            addUser(e);
          }}
        >
          Add
        </button>
      </form>
      {/* Using Toastify component to display the dialog box when album is added */}
      <ToastContainer />
    </div>
  );
}

export default AddAlbum;
