import Image from "next/image";

async function getPictureData() {
  const apiKey = "5YBDTAvSRajF50GWQxEccreEgiS3cbZewXriG3aJ";
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const getData = await getPictureData();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Astronomy Picture of the Day</h1>
      <h2>{getData.title}</h2>
      <p>{getData.date}</p>
      {getData.url && (
        <img
          src={getData.url}
          alt={getData.title}
          width={600}
          height={400}
          style={{ objectFit: "cover" }}
        />
      )}
      <p>{getData.explanation}</p>
    </div>
  );
}
