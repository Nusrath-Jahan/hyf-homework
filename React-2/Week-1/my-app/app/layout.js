// app/layout.js
"use client";
import React from "react";
import Head from "next/head";
import Navbar from "./components/navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>My Blog</title>
        <meta name="description" content="A blog about various topics." />
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
