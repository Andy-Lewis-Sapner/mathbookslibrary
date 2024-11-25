import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-green-dark text-white py-4">
      <h1 className="text-center text-2xl font-bold">
        <Link href="/">Book Viewer</Link>
      </h1>
    </header>
  );
};

export default Header;
