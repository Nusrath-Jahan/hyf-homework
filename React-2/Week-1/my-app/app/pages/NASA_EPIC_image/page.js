// app/pages/NASA_EPIC_image/page.js
"use client"; // This tells Next.js to render the component on the client side

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const apiKey = "5YBDTAvSRajF50GWQxEccreEgiS3cbZewXriG3aJ"; // Replace with your actual NASA API key

export default function NasaEpicImage() {
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const date = searchParams.get("date") || "2023-10-24"; // Default date

  // Fetch EPIC image based on the provided date
  useEffect(() => {
    async function fetchEpicImage() {
      try {
        const res = await fetch(
          `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${apiKey}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch EPIC image");
        }
        const data = await res.json();
        setImageData(data[0]); // Assume we get the first image for the given date
      } catch (err) {
        setError(err.message);
      }
    }

    fetchEpicImage();
  }, [date]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!imageData) {
    return <div>Loading...</div>;
  }

  // Construct the image URL
  const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${date.replaceAll(
    "-",
    "/"
  )}/png/${imageData.image}.png`;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>NASA EPIC Image for {date}</h1>
      <img src={imageUrl} alt={imageData.caption} width={600} height={400} />
      <p>{imageData.caption}</p>
    </div>
  );
}
