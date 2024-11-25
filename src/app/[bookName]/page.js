import BookViewer from "../../components/BookViewer";

const books = {
  "804-806a": { min: "0003", max: "0716", faultyPage: 12 },
  "804-806b": { min: "0003", max: "0672", faultyPage: 13 },
  "806c": { min: "0003", max: "0679", faultyPage: 12 },
  "806d": { min: "0003", max: "0850", faultyPage: 12 },
  "807a": { min: "0003", max: "0463", faultyPage: 12 },
  "807b": { min: "0003", max: "0889", faultyPage: 12 },
};

export default async function BookPage({ params }) {
  const { bookName } = await params;

  if (!books[bookName]) return <p className="text-center">Book not found.</p>;

  const { min, max, faultyPage } = books[bookName];

  return (
    <div className="py-10">
      <h2 className="text-center text-2xl text-green-dark mb-6">{bookName}</h2>
      <BookViewer
        bookName={bookName}
        minPage={min}
        maxPage={max}
        faultyPage={faultyPage}
      />
    </div>
  );
}
