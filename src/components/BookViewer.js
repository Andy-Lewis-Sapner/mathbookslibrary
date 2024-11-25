"use client";
import { useState } from "react";

const BookViewer = ({ bookName, minPage, maxPage, faultyPage }) => {
  const [currentPage, setCurrentPage] = useState(parseInt(minPage, 10));
  const [isLoading, setIsLoading] = useState(false);

  const changePage = (page) => {
    if (page >= minPage && page <= maxPage) {
      if (page === faultyPage) {
        console.log(`Skipping faulty page ${faultyPage}`);
        page = page + 1; // Skip the faulty page
      }

      setIsLoading(true);
      setTimeout(() => {
        setCurrentPage(page);
        setIsLoading(false);
      }, 500); // Simulate slight delay for safe debounce
    }
  };

  const handlePageInput = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      changePage(value);
    }
  };

  const nextPage = () => {
    let next = currentPage + 1;

    // Skip the faulty page
    if (next === faultyPage) {
      next += 1;
    }

    if (next <= maxPage && !isLoading) {
      changePage(next);
    }
  };

  const prevPage = () => {
    let prev = currentPage - 1;

    // Skip the faulty page
    if (prev === faultyPage) {
      prev -= 1;
    }

    if (prev >= minPage && !isLoading) {
      changePage(prev);
    }
  };

  const formattedPage = currentPage.toString().padStart(4, "0");

  const svgUrl = `https://my.geva.co.il/flippbooks/${bookName}/files/assets/common/page-vectorlayers/${formattedPage}.svg`;
  const pngUrl = `https://my.geva.co.il/flippbooks/${bookName}/files/assets/common/page-html5-substrates/page${formattedPage}_1.png`;

  return (
    <div className="text-center">
      <div className="relative inline-block">
        {/* PNG Background */}
        <img
          src={pngUrl}
          alt={`Page ${currentPage}`}
          className="w-full"
          style={{ display: "block" }}
        />

        {/* SVG Overlay */}
        <object
          type="image/svg+xml"
          data={svgUrl}
          className="absolute inset-0 w-full h-full"
          aria-label={`Vector layer for page ${currentPage}`}
        ></object>
      </div>

      {/* Navigation Controls */}
      <div className="mt-6">
        <button
          onClick={prevPage}
          disabled={currentPage <= minPage || isLoading}
          className="bg-green-light text-white px-4 py-2 rounded mr-2 disabled:opacity-50"
        >
          Previous
        </button>
        <input
          type="number"
          min={minPage}
          max={maxPage}
          value={currentPage}
          onChange={handlePageInput}
          className="border px-2 py-1 text-center w-16 mr-2"
        />
        <button
          onClick={nextPage}
          disabled={currentPage >= maxPage || isLoading}
          className="bg-green-light text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BookViewer;
