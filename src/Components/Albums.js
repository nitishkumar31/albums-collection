// importing React, css file and toastify
import React from "react";
import "../Assets/css/AlbumContainer.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Albums({ album, deleteData, changePage, changeUpdateId }) {
  // Function to display toastify dialog on deletion of album
  const showToastMessage = (userId) => {
    let message = (
      <p>
        Item Removed. <strong>UserId was {userId}</strong>
      </p>
    );
    toast.success(message);
  };
  // Filtering data and deleting the album which is selected
  function filterToDelete(id, userId) {
    let afterDelete = album.filter((value) => value.id !== id);
    deleteData(afterDelete);
    showToastMessage(userId);
  }
  // Rendering the album and filtering out the selected album and updating the state via filterToDelete function
  function renderAlbum(data, index) {
    return (
      <div className="albumBox" key={index}>
        {/* Displaying title and user id */}
        <p className="albumName">
          <strong>{data?.title}</strong>
        </p>
        <p className="albumUserId">User Id &gt;&nbsp;{data?.userId}</p>
        <div className="buttons">
          {/* Button to delete data */}
          <button
            title="Delete"
            className="delete"
            onClick={() => {
              filterToDelete(data.id, data.userId);
            }}
          >
            {/* Delete */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
          {/* Button to update data */}
          <button
            title="Update"
            className="update"
            onClick={(e) => {
              changeUpdateId(data?.id);
              changePage("UpdateAlbum");
            }}
          >
            {/* Update */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    // Displaying all the albums via mapping over the array of objects
    <div className="albumContainer">
      {album.length > 0 &&
        album.map((data, index) => {
          return renderAlbum(data, index);
        })}
      <ToastContainer />
    </div>
  );
}

export default Albums;
