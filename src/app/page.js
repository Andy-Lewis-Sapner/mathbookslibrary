import Link from "next/link";

const books = [
  { name: "804-806a", min: "0003", max: "0716", faultyPage: 12 },
  { name: "804-806b", min: "0003", max: "0672", faultyPage: 13 },
  { name: "806c", min: "0003", max: "0679", faultyPage: 12 },
  { name: "806d", min: "0003", max: "0850", faultyPage: 12 },
  { name: "807a", min: "0003", max: "0463", faultyPage: 12 },
  { name: "807b", min: "0003", max: "0889", faultyPage: 12 },
];

export default function Home() {
  return (
    <div className="py-10 px-5">
      <h2 className="text-center text-green-dark text-3xl mb-6">
        Welcome to the Book Viewer
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
        {books.map((book) => (
          <Link
            key={book.name}
            href={`/${book.name}`}
            className="px-6 py-3 bg-green-light text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-dark transition text-center"
          >
            {book.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
