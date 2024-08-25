import React, { useState, useEffect } from "react";
import Navigation from "./Components/Navigation";
import "./Assets/css/App.css";
import Albums from "./Components/Albums";
import AddAlbum from "./Components/AddAlbum";
import UpdateAlbum from "./Components/UpdateAlbum";

function App() {
  // Using state to store the albums data
  const [albums, setAlbums] = useState([]);
  // Using state to store the boolean value to show loading before loading the content
  const [loading, setLoading] = useState(true);
  // Using state to show different pages for differ operations
  const [page, setPage] = useState("albumList");
  // Using state to store the id of the album of which we want to update the data
  const [updateId, setUpdateId] = useState("");

  // Using useEffect() hook to fetch data from api
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/albums");
      const json = await data.json();
      // changing the state of album
      setAlbums(json);
      // Removing the loading
      setLoading(false);
    }
    fetchData();
  }, []);

  // Funtion to delete the Album
  function deleteData(newData) {
    setAlbums(newData);
  }
  // Funtion to change the pages
  function changePage(newData) {
    setPage(newData);
  }
  // Funtion to add new Album
  function addData(newData) {
    setAlbums(newData);
  }
  // Funtion to update an album
  function updateData(newData) {
    setAlbums(newData);
  }
  // Funtion to update Id of the Album
  function changeUpdateId(newData) {
    setUpdateId(newData);
  }
  return (
    <div className="App">
      {/* Rendering Navigation bar  */}
      <Navigation albums={albums} page={page} changePage={changePage} />

      {page === "albumList" ? (
        // Using ternary opertor to check whether to show loading or not
        loading ? (
          <div
            className="spinner-border text-light"
            style={{ marginTop: "5rem" }}
            role="status"
          >
            <span className="sr-only"></span>
          </div>
        ) : (
          // Rendering Albums Component
          <Albums
            album={albums}
            deleteData={deleteData}
            changePage={changePage}
            changeUpdateId={changeUpdateId}
          />
        )
      ) : page === "addAlbum" ? (
        // Rendering addALbum Component when clicked on add Album button
        <AddAlbum album={albums} addData={addData} />
      ) : (
        // Rendering Update Album component when click on update button of an album
        <UpdateAlbum
          album={albums}
          updateId={updateId}
          updateData={updateData}
        />
      )}
    </div>
  );
}

export default App;
