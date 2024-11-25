import Link from "next/link";

const BookImage = ({ name }) => {
  const thumbnailUrl = `https://my.geva.co.il/flippbooks/${name}/files/assets/common/page-html5-substrates/page0001_1.png`;

  return (
    <Link href={`/${name}`}>
      <img
        src={thumbnailUrl}
        alt={`Cover of ${name}`}
        className="w-40 h-60 object-cover rounded shadow-lg hover:scale-105 transition-transform"
      />
    </Link>
  );
};

export default BookImage;
