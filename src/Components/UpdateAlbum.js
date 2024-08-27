import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../Assets/css/UpdateAlbum.css";
import "react-toastify/dist/ReactToastify.css";

function UpdateAlbum({ updateId, updateData, album }) {
  // Using state to store the data of new title
  const [newTitle, setNewTitle] = useState("");
  // Using state to store the previous id of user
  const [prvId, setPrvId] = useState("");

  async function updateAlbum(id, updatedItem) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedItem),
        }
      );

      if (response.ok) {
        const updatedItems = [...album];
        const index = updatedItems.findIndex((item) => item.id === id);
        updatedItems[index] = updatedItem;
        updateData(updatedItems);

        let message = (
          <p>
            <strong>UserId {updatedItem.userId}</strong> Data Updated,{" "}
            <strong>New UserId is {updatedItem.userId}</strong>
          </p>
        );
        toast.success(message, {
          toastId: "success1",
        });
      } else {
        throw new Error("Failed to update album.");
      }
    } catch (error) {
      toast.error("An error occurred while updating the album.");
    }
  }

  function updateNewData(e) {
    e.preventDefault();

    const itemToUpdate = album.find((item) => item.id === updateId);
    const updatedItem = { ...itemToUpdate, title: newTitle, userId: prvId };

    updateAlbum(updateId, updatedItem);

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
