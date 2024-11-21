"use client";
import React, { useState, useEffect } from "react";

export default function MarsRoverPhotos() {
  const [photos, setPhotos] = useState([]); // To store fetched data
  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState(null); // To handle errors

  // Fetch Mars Rover photos using useEffect
  useEffect(() => {
    const fetchMarsPhotos = async () => {
      const apiKey = "5YBDTAvSRajF50GWQxEccreEgiS3cbZewXriG3aJ"; // Your NASA API key
      const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPhotos(data.photos); // Update state with fetched photos
      } catch (error) {
        setError(error.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchMarsPhotos();
  }, []); // Empty dependency array ensures it runs only on component mount

  if (loading) {
    return <p>Loading...</p>; // Show loading message while data is being fetched
  }

  if (error) {
    return <p>Error: {error}</p>; // Display error message if something goes wrong
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Mars Rover Photos</h1>
      {photos.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {photos.map((photo) => (
            <div key={photo.id}>
              <img
                src={photo.img_src}
                alt={`Mars Rover - ${photo.camera.full_name}`}
                style={{ width: "100%", height: "auto" }}
              />
              <p>
                <strong>Rover:</strong> {photo.rover.name}
              </p>
              <p>
                <strong>Camera:</strong> {photo.camera.full_name}
              </p>
              <p>
                <strong>Earth Date:</strong> {photo.earth_date}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No photos available</p>
      )}
    </div>
  );
}
