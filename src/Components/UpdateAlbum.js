// importing react useState() hook , toastify and its css file
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../Assets/css/UpdateAlbum.css";
import "react-toastify/dist/ReactToastify.css";

function UpdateAlbum({ updateId, updateData, album }) {
  // Using state to store the data of new title
  const [newTitle, setNewTitle] = useState("");
  // Using state to store the previous id of user
  const [prvId, setPrvId] = useState("");

  function updateNewData(e) {
    e.preventDefault();

    // Create a copy of the original array
    const updatedItems = [...album];

    // Find the object to update
    const itemToUpdate = updatedItems.find((item) => item.id === updateId);

    // Create a copy of the object
    const updatedItem = { ...itemToUpdate, title: newTitle, userId: prvId };

    // Replace the original object with the updated one
    const index = updatedItems.findIndex((item) => item.id === updateId);
    updatedItems[index] = updatedItem;

    // Set the updated array as the new state
    updateData(updatedItems);
    let message = (
      <p>
        <strong>UserId {itemToUpdate.userId}</strong> Data Updated,{" "}
        <strong>New UserId is {updatedItem.userId}</strong>
      </p>
    );
    // Applying the message after completion of task
    toast.success(message, {
      toastId: "success1",
    });
    // Changing the states to initial states after data updated
    setNewTitle("");
    setPrvId("");
  }
  return (
    <div className="container">
      <form>
        <label>
          Update Title
          {/* Input to take title data */}
          <input
            type="text"
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
            required
          ></input>
        </label>
        <label>
          Update Id
          {/* Input to take userId */}
          <input
            type="number"
            value={prvId}
            onChange={(e) => {
              setPrvId(e.target.value);
            }}
            required
          ></input>
        </label>
        {/* Created button which will update the data provided in both the inputs */}
        <button
          className="submitBtn"
          type="submit"
          onClick={(e) => {
            updateNewData(e);
          }}
        >
          Add
        </button>
      </form>
      {/* Using Toastify Component to show the dialog on success */}
      <ToastContainer />
    </div>
  );
}

export default UpdateAlbum;
