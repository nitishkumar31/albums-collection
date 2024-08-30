import React, { useState } from "react";
import "../Assets/css/addAlbum.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddAlbum({ album, addData }) {
  // Using states to store the title and userId
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");

  async function addUser(e) {
    e.preventDefault();

    const newAlbum = { userId: parseInt(userId), title: title };

    try {
      // Making a POST request to add the album
      const response = await fetch("https://jsonplaceholder.typicode.com/albums", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAlbum),
      });

      if (response.ok) {
        const data = await response.json();
        // Updating the state with the new album
        addData([...album, data]);

        // Displaying the success message using toastify
        let message = (
          <p>
            Album Added. <strong>UserId is {data.userId}</strong>
          </p>
        );
        toast.success(message);
      } else {
        throw new Error("Failed to add album.");
      }
    } catch (error) {
      toast.error("An error occurred while adding the album.");
    }

    // Resetting the input fields
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
          UserId
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
